import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { LevelData, ProgramComponent, ProgramData, TroopLocation, UserData } from 'src/app/models/database/DatabaseData';
import {AngularFireStorage} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
/**
 * Service that Manages interactions between client database
 */
export class FirestoreDatabaseService {

  //constants for the names of database collections
  /**
   * Firestore Collection id for User Data
   */
  private USER_DATA = "User_Data";
  /**
   * Firestore Collection id for Program Data
   */
  private CODE_DATA = "Code_Data";
  /**
   * Firestore Collection id for Level Data
   */
  private LEVEL_DATA = "Level_Data";

  constructor(private db: AngularFirestore, private storage: AngularFireStorage) {}

  /**
   * Sends a request to database for the specified document in the collection
   * returns the observable for the request
   * @param collection The collection the database is checking
   * @param documentname the document id that is being requested
   */
  private queryDocument(collection: string, documentname: string) : Observable<any> {
    return this.db.collection(collection).doc(documentname).get();
  }

  /**
   * Sends a request to database for the deletion of the specified document
   * returns a promise with the success of the request
   * @param collection the collection the database is checking
   * @param documentname the document id that is being request
   */
  private deleteDocument(collection: string, documentname: string) : Promise<void> {
    return this.db.collection(collection).doc(documentname).delete();
  }

  /**
   * Sends a request to database for updating the data of the specified document.
   * Creates a new document of the specified name/id if it doesnt already exist
   * Returns a promise with the success of the request.
   * @param collection the collection of the document in the database is updating
   * @param documentname the document id that is being update
   * @param data the data to update with
   */
  private updateDocument(collection: string, documentname: string, data) : Promise<void> {
    return this.db.collection(collection).doc(documentname).set(data);
  }

  //getters

  /**
   * function to get user data from the database. Must include a listener function(Userdata) for response
   * @param uid the user id you are getting data for
   * @param listenerFunction the function(ProgramData) that receives the request data
   */
  public getUserData(uid:string, listenerFunction) {
    this.queryDocument(this.USER_DATA, uid).subscribe(result => {
      var data = result.data();
        var ud: UserData = {
          Username:data.Username,
          CompletedLevels: data.CompletedLevels,
          Programs: data.OwnedCodes
        }
        listenerFunction(ud);
    })
  }

  /**
   * function to get the data for a program from the database Must include a listener function(ProgramData) for response
   * @param cid the program id you are getting data for
   * @param listenerFunction the function(Programdata) that receives the request data
   */
  public getProgramData(cid:string, listenerFunction) {
    this.queryDocument(this.CODE_DATA, cid).subscribe(result => {
      var data = result.data();

      //get all code components
      var cbArr: ProgramComponent[] = [];

      console.log(typeof data.components);

      for(const [key, value] of (new Map<string, string[]>(Object.entries(data.components))).entries()) {
        cbArr.push({
          TroopId: parseInt(key),
          CodeBlocks: value
        });
      }

      var formationArr: TroopLocation[] = [];

      for(const [key, value] of (new Map(Object.entries(data.formation))).entries()) {
        formationArr.push({
          TroopId: parseInt(key),
          location: {
            x: value[0],
            y: value[1]
          }
        });
      }

      var pd: ProgramData = {
        Name: data.name,
        Verified: data.verified,
        CodeBlocks: cbArr,
        Formation: formationArr
      }
      listenerFunction(pd);
    });
  }

  /**
   * function to get the data for a level from the database Must include a listener function(LevelData) for response
   * @param cid the program id you are getting data for
   * @param listenerFunction the function(LevelData) that receives the request data
   */
  public getLevelData(lid:string, listenerFunction) {
    this.queryDocument(this.LEVEL_DATA, lid).subscribe(result => {
      var data = result.data();

      var ld: LevelData = {
        ProgramId: data.Code
      }

      listenerFunction(ld);
    });
  }

  /**
   * function to get the data for a program in a level from the database Must include a listener function(ProgramData) for response
   * @param lid the program id you are getting data for
   * @param listenerFunction the function(ProgramData) that receives the request data
   */
  public getLevelProgram(lid: string, listenerFunction) {
    var self = this;
    this.getLevelData(lid, function(data) {
      self.getProgramData(data.ProgramId.toString(), listenerFunction);
    })
  }

  /**
   * function to retrieve the user's hand typed code and converts it to a worker. Must include a listener function(ProgramData) for response
   * @param storageRef the path in storage to the user's code
   * @param fileName the name you wish to save the file as
   * @param listenerFunction the function(Worker) that receives the request data
   */
  public getUserCodeFromStorage(storageRef, fileName, listenerFunction){

    let ref = this.storage.ref(storageRef);
    ref.getDownloadURL().subscribe(
      res => {
        let xhr = new XMLHttpRequest();
        xhr.responseType = 'text';
        xhr.onload = function(event) {
          let code = xhr.response;
          let file = new File([code], fileName, {
            type: "text/javascript",
          });
          let url = window.URL.createObjectURL(file);
          listenerFunction(new Worker(url));
        };
        xhr.open('GET', res);
        xhr.send();
      },
      error => {
        console.log(error);
      }
    )

  }

  //setters
  /**
   * Function that sets the data in the user collection database based on a UserData object
   * Returns the promise of the response
   * @param uid the id of the user you are trying to change
   * @param ud the UserData object to place into database
   */
  public setUserData(uid: string, ud: UserData) : Promise<void> {
    return this.updateDocument(this.USER_DATA, uid, {
      Username: ud.Username,
      CompletedLevels: ud.CompletedLevels,
      OwnedCodes: ud.Programs
    })
  }

  /**
   * Function that sets the data in the program collection database based on a ProgramData object
   * Returns the promise of the response
   * @param uid the id of the program you are trying to change
   * @param ud the ProgramData object to place into database
   */
  public setProgramData(pid: string, pd: ProgramData) : Promise<void> {
    var compMap = new Map<string, string[]>();

    for(let a of pd.CodeBlocks) {
      compMap.set(a.TroopId.toString(), a.CodeBlocks);
    }

    var troopMap = new Map<string, number[]>();

    for(let a of pd.Formation) {
      troopMap.set(a.TroopId.toString(), [a.location.x, a.location.y]);
    }

    return this.updateDocument(this.CODE_DATA, pid, {
      name: pd.Name,
      verified: pd.Verified,
      components: Array.from(compMap).reduce((obj, [key, value]) => (Object.assign(obj, {[key]: value})), {}),
      formation: Array.from(troopMap).reduce((obj, [key, value]) => (Object.assign(obj, {[key]: value})), {})
    });
  }

  //deleters
  /**
   * Deletes program data from database
   * @param pid the program id to delete
   */
  public deleteProgramData(pid: string) : Promise<void> {
    return this.deleteDocument(this.CODE_DATA, pid);
  }

}
