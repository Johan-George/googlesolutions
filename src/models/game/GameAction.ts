import { Unit } from "./Unit";

export class GameAction {

    actionId: string = null;
    doer: Unit = null;
    reciver: Unit = null;
    hasDied: boolean = false;

    constructor(id: string, doer: Unit, reciever: Unit, died: boolean) {
        this.actionId = id;
        this.doer = doer;
        this.reciver = reciever;
        this.hasDied = died;
    }
}