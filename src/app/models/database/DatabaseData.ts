
/**
 * The User data from the database "User_Data" Collection
 * This data is a representation of what was gathered from 
 * the database
 */
export class UserData {
    Username: string
    CompletedLevels: number[]
    Programs: number[]
}

/**
 * The Level data from the database "Level_Data" Collection
 * This data is a representation of what was gathered from 
 * the database
 */
export class LevelData {
    /**
     * number repsenting the program id of the level
     * This value is meant to be used to grab a 'ProgramData'
     * Object from the database
     */
    ProgramId: number
}

/**
 * The Program Data from the database "Code_Data" Collection
 * This data is a representation of what was gathered from 
 * the database
 */
export class ProgramData {
    /**
     * The String representing the name given to the program
     * Used for users to identify their code in the database
     */
    Name: string

    /**
     * boolean representation if the compiler has verified 
     * the code to be safe to fun
     */
    Verified: boolean

    /**
     * Array of Program Objects representing a mapping of 
     * each Unit's avaliable program data
     */
    //CodeBlocks: ProgramComponent[]

    /**
     * Array of TroopLocation Objects representing a mapping
     * of each Unit's starting location
     */
    //Formation: TroopLocation[]

    /**
     * Array of units in the mapping
     */
    Units: UnitData[]
    
}

/**
 * Object representing each Unit's avaliable program and location 
 * within the ProgramData
 */
export class UnitData {
    TroopType: string = undefined
    CodeType: CodeType = CodeType.NONE
    CodeBlocks: string[] = null
    CodeFile: {storageRef: string, filename: string} = null
    location: {x:number, y:number} = null
}

export enum CodeType {
    BLOCK, FILE, NONE
}