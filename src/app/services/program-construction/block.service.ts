import { Injectable } from '@angular/core';
import { BlockCommand, ConditionalBlock, Executable, Predicate, TerminalBlock } from 'src/app/models/blockCommands/block-command';
import { Else } from 'src/app/models/blockCommands/blocks/conditional/Else';
import { ElseIf } from 'src/app/models/blockCommands/blocks/conditional/ElseIf';
import { If } from 'src/app/models/blockCommands/blocks/conditional/If';
import { Attack } from 'src/app/models/blockCommands/blocks/executable/Attack';
import { Backward } from 'src/app/models/blockCommands/blocks/executable/Backward';
import { Forward } from 'src/app/models/blockCommands/blocks/executable/Forward';
import { Left } from 'src/app/models/blockCommands/blocks/executable/Left';
import { Right } from 'src/app/models/blockCommands/blocks/executable/Right';
import { Wait } from 'src/app/models/blockCommands/blocks/executable/Wait';
import { EmptyPredicate } from 'src/app/models/blockCommands/blocks/predicate/EmptyPredicate';
import { EnemyNear } from 'src/app/models/blockCommands/blocks/predicate/EnemyNear';
import { HealthBelow30Percent } from 'src/app/models/blockCommands/blocks/predicate/HealthBelow30Percent';
import { End } from 'src/app/models/blockCommands/blocks/terminal/End';
import { EndElse } from 'src/app/models/blockCommands/blocks/terminal/EndElse';
import { EndElseIf } from 'src/app/models/blockCommands/blocks/terminal/EndElseIf';
import { EndIf } from 'src/app/models/blockCommands/blocks/terminal/Endif';
import { Start } from 'src/app/models/blockCommands/blocks/terminal/Start';

@Injectable({
  providedIn: 'root'
})
/**
 * Service that aids in programming using the BlockCommand Designer and
 * compiling
 */
export class BlockService {

  constructor() { }

  /**
   * Array of all BlockCommands that can be placed on the code designer
   */
  static placeableBlocks: Array<BlockCommand> = [
    new If(), new Attack(), new Backward(), new Forward(), new Left(),
    new Right(), new Wait(), new EndIf(), new Else(), new ElseIf(),
    new EndElse(), new EndElseIf()
  ];

  /**
   * Array representing all BlockCommands
   */
  static allBlocks: Array<BlockCommand> = BlockService.placeableBlocks.concat(new Start(), new End(), new EmptyPredicate());

  /**
   * Array representing all Predicates avaliable
   */
  static predicates: Array<Predicate> = [new EnemyNear(), new HealthBelow30Percent()];

  /**
   * returns true if the BlockCommand is a ConditionalBlock Object
   * @param command The BlockCommand to check
   */
  isConditional(command: BlockCommand): command is ConditionalBlock {
    return (<ConditionalBlock>command).condition !== undefined;
  }

  /**
   * returns true if the BlockCommand is an Executable Object
   * @param command The BlockCommand to check
   */
  isExecutable(command: BlockCommand): command is Executable {
    return (<Executable>command).execute !== undefined;
  }

  /**
   * returns true if the BlockCommand is a TerminalBlock Object
   * @param command The BlockCommand to check
   */
  isTerminal(command: BlockCommand): command is TerminalBlock {
    return (<TerminalBlock>command).terminate !== undefined;
  }

  /**
   * Returns CommandBlock from id
   * @param id the Id of the block to search for
   */
  getById(id: string) {
    for (let block of BlockService.allBlocks) {

      if (id == block.getId()) {
        if (this.isConditional(block)) {
          let copy = Object.assign({}, block);
          copy.condition = null;
          return copy
        } else {
          return Object.assign({}, block);
        }
      }
    }
  }

}