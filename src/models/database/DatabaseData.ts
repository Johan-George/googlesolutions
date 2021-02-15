
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
    CodeBlocks: ProgramComponent[]

    /**
     * Array of TroopLocation Objects representing a mapping
     * of each Unit's starting location
     */
    Formation: TroopLocation[]
}

/**
 * Object representing each Unit's avaliable program within
 * the ProgramData
 */
export class ProgramComponent {
    TroopId: number
    CodeBlocks: string[]
}

/**
 * Object representing each Unit's starting location within
 * the ProgramData
 */
export class TroopLocation {
    TroopId: number
    location: {x:number, y:number}
}
