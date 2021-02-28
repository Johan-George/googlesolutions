import {BlockCommand} from '../block-command';

export class RealCodeRepr{

  code: string;
  indentationLevel: number = 0;

  // Why don't overloaded constructors exist ;-;
  constructor(block: BlockCommand=null, lineOfCode: string=null) {

    if(block !== null && lineOfCode !== null){
      throw new Error('Illegal use of this constructor');
    }else if(lineOfCode !== null){
      this.code = lineOfCode;
    }else{
      this.code = block.getAsCode();
      this.indentationLevel = block.indentationLevel;
    }

  }

  static funcToRealCodeRepr(func: string){

    let codeReprs = [];
    let lines: Array<string> = func.split('@');
    console.log(lines.length);
    for(let line of lines){
      let count = line.split('^').length - 1;
      // @ts-ignore
      let codeRepr = new RealCodeRepr(null, line.replaceAll('^', ''));
      codeRepr.indentationLevel = count;
      codeReprs.push(codeRepr);

    }
    return codeReprs;

  }

}
//@ -> new line ^ -> tab (assuming we don't use @ or ^ in the actual code
export const healthBelow30PercentFunc: string = 'function healthLessThan30Percent(you){@' +
  '^return ((you.health / you.maxHealth) * 100) < 30;' +
  '@' +
  '}'

export const enemyNearFunc: string = 'function enemyInRange(grid, you){@' +
  '^for(let x = 0; x < grid.length; x++){@' +
  '^^for(let y = 0; y < grid[0].length; y++){@' +
  '^^^let other = grid[x][y];@' +
  '^^^if(!((you.location.x === x && you.location.y === y) || other === null || you.team === other.team)){@' +
  '^^^^if((x >= you.location.x - you.attackRange && x <= you.location.x + you.attackRange) &&@' +
  '^^^^^(y >= you.location.y - you.attackRange && y <= you.location.x + you.attackRange)){@' +
  '^^^^^^return true;@' +
  '^^^^^}@' +
  '^^^^}@' +
  '^^^}@' +
  '^^}@' +
  '^return false;@' +
  '}'
