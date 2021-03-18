import { Component, OnInit } from '@angular/core';
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-javascript-guid',
  templateUrl: './javascript-guide.component.html',
  styleUrls: ['../docs/docs.component.css']
})
export class JavascriptGuideComponent implements OnInit {

  constructor(private viewPortScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  scrollToSection(sectionName){

    this.viewPortScroller.scrollToAnchor(sectionName);

  }

}
