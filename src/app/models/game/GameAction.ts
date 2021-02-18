import { Unit } from "./Unit";

/**
 * Object that represents a single action that occured in 1 step of the game
 */
export class GameAction {

    /**
     * The action in String representation of what occured in the previous step
     */
    actionId: string = null;

    /**
     * The Unit object that was committing the action
     * null if the action was not committed by the unit
     */
    doer: Unit = null;

    /**
     * The Unit object that was receiving the action
     * null if the action aws not acted to another unit
     */
    receiver: Unit = null;

    /**
     * The boolean value that represents if any unit has died
     * after the previous action.
     */
    hasDied: boolean = false;

    /**
     * Main Constructor for game action
     * @param id String Id of what happened
     * @param doer The unit object that committed the action (null if no unit has commited the action)
     * @param receiver The unit object that recieved the action (null if no unit has recieved the action)
     * @param died true if any unit died, false otherwise
     */
    constructor(id: string, doer: Unit, receiver: Unit, died: boolean) {
        this.actionId = id;
        this.doer = doer;
        this.receiver = receiver;
        this.hasDied = died;
    }
}
