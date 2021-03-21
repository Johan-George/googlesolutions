import { Injectable } from '@angular/core';
import { BlockCommand, ConditionalBlock, Executable, Predicate, TerminalBlock } from 'src/app/models/blockCommands/block-command';
import { Else } from 'src/app/models/blockCommands/blocks/conditional/Else';
import { ElseIf } from 'src/app/models/blockCommands/blocks/conditional/ElseIf';
import { If } from 'src/app/models/blockCommands/blocks/conditional/If';
import { Attack } from 'src/app/models/blockCommands/blocks/executable/Attack';
import { West } from 'src/app/models/blockCommands/blocks/executable/West';
import { East } from 'src/app/models/blockCommands/blocks/executable/East';
import { North } from 'src/app/models/blockCommands/blocks/executable/North';
import { South } from 'src/app/models/blockCommands/blocks/executable/South';
import { Wait } from 'src/app/models/blockCommands/blocks/executable/Wait';
import { EmptyPredicate } from 'src/app/models/blockCommands/blocks/predicate/EmptyPredicate';
import { EnemyNear } from 'src/app/models/blockCommands/blocks/predicate/EnemyNear';
import { HealthBelow30Percent } from 'src/app/models/blockCommands/blocks/predicate/HealthBelow30Percent';
import { End } from 'src/app/models/blockCommands/blocks/terminal/End';
import { EndElse } from 'src/app/models/blockCommands/blocks/terminal/EndElse';
import { EndElseIf } from 'src/app/models/blockCommands/blocks/terminal/EndElseIf';
import { EndIf } from 'src/app/models/blockCommands/blocks/terminal/Endif';
import { Start } from 'src/app/models/blockCommands/blocks/terminal/Start';
import {TextAction1} from '../../models/blockCommands/blocks/executable/TestAction1';
import {TextAction2} from '../../models/blockCommands/blocks/executable/TestAction2';
import {TruePredicate} from '../../models/blockCommands/blocks/predicate/TruePredicate';
import {FalsePredicate} from '../../models/blockCommands/blocks/predicate/FalsePredicate';
import {CompoundPredicate} from '../../models/blockCommands/blocks/predicate/CompoundPredicate';
import {EastAvailable} from '../../models/blockCommands/blocks/predicate/EastAvailable';
import {WestAvailable} from '../../models/blockCommands/blocks/predicate/WestAvailable';
import {NorthAvailable} from '../../models/blockCommands/blocks/predicate/NorthAvailable';
import {SouthAvailable} from '../../models/blockCommands/blocks/predicate/SouthAvailable';

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
    new If(), new Attack(), new North(), new South(), new East(),
    new West(), new Wait(), new EndIf(), new Else(), new ElseIf(),
    new EndElse(), new EndElseIf(), new TextAction2(), new TextAction1()
  ];

  static actionBlocks: Array<BlockCommand> = [
    new North(), new South(), new East(),
    new West(), new Wait(), new Attack()
  ];

  static conditionalBlocks: Array<BlockCommand> = [

    new If(), new EndIf(), new Else(), new ElseIf(),
    new EndElse(), new EndElseIf()
  ];
  /**
   * Array representing all BlockCommands
   */
  static allBlocks: Array<BlockCommand> = BlockService.placeableBlocks.concat(new Start(), new End(), new EmptyPredicate());

  /**
   * Array representing all Predicates available
   */
  static predicates: Array<Predicate> = [new EnemyNear(), new HealthBelow30Percent(),
    new NorthAvailable(), new SouthAvailable(), new EastAvailable(), new WestAvailable()];

  /**
   * returns true if the BlockCommand is a ConditionalBlock Object
   * @param command The BlockCommand to check
   */
  isConditional(command: BlockCommand): command is ConditionalBlock {
    return (<ConditionalBlock>command).conditions !== undefined;
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
  getById(id: string): BlockCommand {
    switch (id) {
      case If.id:
        return new If();
      case Attack.id:
        return new Attack();
      case North.id:
        return new North();
      case South.id:
        return new South();
      case East.id:
        return new East();
      case West.id:
        return new West();
      case Wait.id:
        return new Wait();
      case ElseIf.id:
        return new ElseIf();
      case Else.id:
        return new Else();
      case EndIf.id:
        return new EndIf();
      case EndElseIf.id:
        return new EndElseIf();
      case EndElse.id:
        return new EndElse();
      case TextAction1.id:
        return new TextAction1();
      case TextAction2.id:
        return new TextAction2();
      case HealthBelow30Percent.id:
        return new HealthBelow30Percent();
      case EnemyNear.id:
        return new EnemyNear();
      case TruePredicate.id:
        return new TruePredicate();
      case FalsePredicate.id:
        return new FalsePredicate();
      case EmptyPredicate.id:
        return new EmptyPredicate();
      case CompoundPredicate.id:
        return new CompoundPredicate();
      case EastAvailable.id:
        return new EastAvailable();
      case WestAvailable.id:
        return new WestAvailable();
      case NorthAvailable.id:
        return new NorthAvailable();
      case SouthAvailable.id:
        return new SouthAvailable();
      case Start.id:
        return new Start();
      case End.id:
        return new End();
      default:
        throw new Error(`Id of ${id} is not recognized.`);

    }

  }

  cloneBlock(block: BlockCommand){

    return Object.create(block);

  }

}
