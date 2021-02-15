
export class LevelData {
    ProgramId: number
}

export class ProgramData {
    Name: string
    Verified: boolean
    CodeBlocks: ProgramComponent[]
    Formation: TroopLocation[]
}

export class ProgramComponent {
    TroopId: number
    CodeBlocks: string[]
}

export class TroopLocation {
    TroopId: number
    location: {x:number, y:number}
}

export class UserData {
    Username: string
    CompletedLevels: number[]
    Programs: number[]
}