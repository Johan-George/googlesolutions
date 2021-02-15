import { BlockCommand } from "../blockCommands/block-command";

export class Unit {
  id: number;
  energy: number = 3;
  team: number;

  location: { x: number, y: number } = { x: 0, y: 0 };
  activecode: BlockCommand[];

  doMove() {}

}
