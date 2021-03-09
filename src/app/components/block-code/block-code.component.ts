import {Component, OnInit} from '@angular/core';
import {transferArrayItem} from '@angular/cdk/drag-drop';
import {MatDialog} from '@angular/material/dialog';
import {BlockCommand, Predicate} from 'src/app/models/blockCommands/block-command';
import {End} from 'src/app/models/blockCommands/blocks/terminal/End';
import {Start} from 'src/app/models/blockCommands/blocks/terminal/Start';
import {BlockService} from 'src/app/services/program-construction/block.service';
import {CodeService} from 'src/app/services/program-construction/code.service';
import {ErrorComponent} from '../error/error.component';
import {Else} from 'src/app/models/blockCommands/blocks/conditional/Else';
import {enemyNearFunc, healthBelow30PercentFunc, RealCodeRepr} from '../../models/blockCommands/actual-code/RealCodeRepr';
import {HealthBelow30Percent} from '../../models/blockCommands/blocks/predicate/HealthBelow30Percent';
import {EnemyNear} from '../../models/blockCommands/blocks/predicate/EnemyNear';
import {EmptyPredicate} from '../../models/blockCommands/blocks/predicate/EmptyPredicate';
import {Unit} from '../../models/game/units/Unit';
import {CodeType, ProgramData, UnitData} from '../../models/database/DatabaseData';
import {Swordsman} from '../../models/game/units/Swordsman';

@Component({
  selector: 'app-block-code',
  templateUrl: './block-code.component.html',
  styleUrls: ['./block-code.component.css']
})
export class BlockCodeComponent implements OnInit{

  codeBlocks: Array<BlockCommand> = BlockService.placeableBlocks;

  predicates: Array<Predicate> = BlockService.predicates;

  draggingCode: boolean = false;

  codeTabs: Array<Array<BlockCommand>> = [

    [new Start(), new End()],
    [new Start(), new End()],
    [new Start(), new End()],
    [new Start(), new End()]

  ];

  currentCode: Array<BlockCommand> = this.codeTabs[0];

  blockCategories: Array<any> = [

    {type: 'Action', selected: true},
    {type:'Conditional', selected: false}

  ];
  selectedCategory: any = this.blockCategories[0];

  realCode: Array<RealCodeRepr> = this.currentCode.map(block => new RealCodeRepr(block));
  extraLinesAdded: number = 3;
  hasHealthFunc = false;
  hasEnemyNearFunc = false;
  programData: ProgramData;

  constructor(private codeService: CodeService, public blockService: BlockService, private dialog: MatDialog) { }

  ngOnInit(): void {

    this.programData = new ProgramData();
    this.programData.Name = 'Test';
    let unit = new UnitData();
    unit.CodeBlocks = ['RWFzdA=='];
    unit.CodeType = CodeType.BLOCK;
    unit.TroopType = Swordsman.dbid;
    unit.location = {x: 1, y:1};
    this.programData.Units = [unit];
    this.initStarterCode();

  }


  onDrop(event) {

    if (event.container.data === this.currentCode &&
      event.currentIndex != 0 && !(event.currentIndex >= this.currentCode.length)) {
      let block = event.previousContainer.data[event.previousIndex];
      let copy = Object.create(block);
      this.setIndentationLevel(event, block);
      if (this.blockService.isConditional(block)) {
        copy.condition = Object.create(block.conditions);
      }
      event.previousContainer.data.push(copy);
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex, event.currentIndex);
      this.realCode.splice(event.currentIndex + this.extraLinesAdded, 0, new RealCodeRepr(copy));
    }


  }

  onDeleteBlock(index) {
    this.currentCode.splice(index, 1);
    this.realCode.splice(index + this.extraLinesAdded, 1);
    this.recalculateIndentation();
  }

  exportCode() {

    try {
      let compiled = this.codeService.compileToExecutableCode(this.currentCode);
      for (let fn of compiled) {
        console.log(fn([], new Unit()));
      }

      let serialized = this.codeService.serializeBlocks(this.currentCode);
      console.log(serialized);
      let deserialized = this.codeService.deserializeToBlocks(serialized);
      console.log(deserialized);
      for(let fn of this.codeService.compileToExecutableCode(deserialized)){
        console.log(fn([], new Unit()))
      }

    } catch (err) {
      console.log(err);
      this.dialog.open(ErrorComponent, { data: err.message })
    }

  }

  onChangeCondition(block, value, index, blockIndex) {
    let conjunction = block.conditions[index].conjunction;
    block.conditions[index] = value;
    block.conditions[index].conjunction = conjunction;
    this.refreshCode(blockIndex);
    if(value.getLabel() === HealthBelow30Percent.label && !this.hasHealthFunc){
      this.addFunctionToRealCode(healthBelow30PercentFunc);
      this.hasHealthFunc = true;
    }else if(value.getLabel() === EnemyNear.label && !this.hasEnemyNearFunc){
      this.addFunctionToRealCode(enemyNearFunc);
      this.hasEnemyNearFunc = true;
    }
  }

  isConditional(block) {
    return this.blockService.isConditional(block) && !(block.getLabel() === Else.label);
  }

  isEndBlock(block: BlockCommand) {
    return block.getLabel() === Start.label || block.getLabel() === End.label
  }

  isTerminalBlock(block: BlockCommand){

    return this.blockService.isTerminal(block);

  }

  /*
   If the event argument is set to null, we assume you are doing it based on index, otherwise if index is null
   or not specified then we do it based on the event. The reason this is the way it is because when we drag the
   blocks we get their index using the event. But we also need the option to do it by indent when we recalculate
   the indentation when blocks are deleted or when we import the code.
   */
  setIndentationLevel(event, block, index=null){

    let blockIndex = index;

    if(event !== null){

      blockIndex = event.currentIndex;

    }

    let blockAbove = this.currentCode[blockIndex - 1];
    if(blockIndex === 1){
      block.indentationLevel = 1;
    }else if(this.blockService.isConditional(blockAbove) && !(this.blockService.isTerminal(block))){
      block.indentationLevel = blockAbove.indentationLevel + 1;
    }else if(this.blockService.isTerminal(block) && !(blockAbove.indentationLevel === 1)
      && !(this.blockService.isConditional(blockAbove))){
      block.indentationLevel = blockAbove.indentationLevel - 1;
    }else{
      block.indentationLevel = blockAbove.indentationLevel;
    }

  }

  recalculateIndentation(){

    for(let i = 1; i < this.currentCode.length - 1; i++){

      let block = this.currentCode[i];
      this.setIndentationLevel(null, block, i);
      this.realCode[i + this.extraLinesAdded].indentationLevel = block.indentationLevel;

    }

  }

  initStarterCode(){

    let dataInit = new RealCodeRepr(null, 'let data = JSON.parse(turnEvent.data);');
    dataInit.indentationLevel = 1;
    this.realCode.splice(1, 0, dataInit);
    let gridInit = new RealCodeRepr(null, 'let grid = data.grid;');
    gridInit.indentationLevel = 1;
    this.realCode.splice(2, 0, gridInit);
    let unitInit = new RealCodeRepr(null, 'let me = data.unit;');
    unitInit.indentationLevel = 1;
    this.realCode.splice(this.extraLinesAdded, 0, unitInit);

  }

  addFunctionToRealCode(funcCode){

    let codeReprs = RealCodeRepr.funcToRealCodeRepr(funcCode);
    for(let line of codeReprs){
      this.realCode.push(line);
    }

  }

  addCondition(conditions){

    conditions.push(new EmptyPredicate());

  }

  setConjunction(predicate, conj, index){
    predicate.conjunction = conj;
    this.refreshCode(index);
  }

  deleteCondition(conditions, index){

    conditions.splice(index, 1);
    this.refreshCode(index);

  }

  refreshCode(index){

    this.realCode[index + this.extraLinesAdded].code = this.currentCode[index].getAsCode();

  }

  refreshAllCode(){

    this.realCode = [];
    for(let block of this.currentCode){
      this.realCode.push(new RealCodeRepr(block));
    }
    this.initStarterCode();

  }

  updateCategorySelected(index){

    for(let category of this.blockCategories){

      category.selected = false;

    }
    this.blockCategories[index].selected = true;
    this.selectedCategory = this.blockCategories[index];


  }

  getBlocksOfSelectedCategory(){

    if(this.selectedCategory === this.blockCategories[0]){
      return BlockService.actionBlocks;
    }else{
      return BlockService.conditionalBlocks;
    }

  }

  changeTab(tab){

    this.currentCode = tab;
    this.refreshAllCode();

  }

  updateCodeDrag(){

    this.draggingCode = !this.draggingCode;

  }

}
