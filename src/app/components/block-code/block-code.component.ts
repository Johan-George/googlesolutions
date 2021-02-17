import { Component, OnInit } from '@angular/core';
import { transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { BlockCommand, Predicate } from 'src/app/models/blockCommands/block-command';
import { End } from 'src/app/models/blockCommands/blocks/terminal/End';
import { Start } from 'src/app/models/blockCommands/blocks/terminal/Start';
import { BlockService } from 'src/app/services/program-construction/block.service';
import { CodeService } from 'src/app/services/program-construction/code.service';
import { ErrorComponent } from '../error/error.component';
import { Else } from 'src/app/models/blockCommands/blocks/conditional/Else';

@Component({
  selector: 'app-block-code',
  templateUrl: './block-code.component.html',
  styleUrls: ['./block-code.component.css']
})
export class BlockCodeComponent implements OnInit {

  codeBlocks: Array<BlockCommand> = BlockService.placeableBlocks;

  predicates: Array<Predicate> = BlockService.predicates;

  currentCode: Array<BlockCommand> = [

    new Start(),
    new End()

  ];

  constructor(private codeService: CodeService, private blockService: BlockService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onDrop(event) {

    if (event.container.data === this.currentCode &&
      event.currentIndex != 0 && !(event.currentIndex >= this.currentCode.length)) {
      let block = event.previousContainer.data[event.previousIndex];
      let copy = Object.create(block);
      this.setIndentationLevel(event, block);
      if (this.blockService.isConditional(block)) {
        copy.condition = Object.create(block.condition);
      }
      event.previousContainer.data.push(copy);
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex, event.currentIndex);
    }


  }

  onDeleteBlock(index) {
    this.currentCode.splice(index, 1);
    this.recalculateIndentation();
  }

  exportCode() {

    try {
      let compiled = this.codeService.compileToExecutableCode(this.currentCode);
      for (let fn of compiled) {
        fn([], []);
      }

      let serialized = this.codeService.serializeBlocks(this.currentCode);

    } catch (err) {
      this.dialog.open(ErrorComponent, { data: err.message })
    }

  }

  onChangeCondition(block, value) {
    block.condition = value;
  }

  isConditional(block) {
    return this.blockService.isConditional(block) && !(block.getLabel() === Else.label);
  }

  isEndBlock(block: BlockCommand) {
    return block.getLabel() === Start.label || block.getLabel() === End.label
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
    }else if(this.blockService.isTerminal(block) && !(blockAbove.indentationLevel === 1)){
      block.indentationLevel = blockAbove.indentationLevel - 1;
    }else{
      block.indentationLevel = blockAbove.indentationLevel;
    }

  }

  recalculateIndentation(){

    for(let i = 1; i < this.currentCode.length - 1; i++){

      let block = this.currentCode[i];
      this.setIndentationLevel(null, block, i);

    }

  }
}
