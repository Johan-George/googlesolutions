import { Component, OnInit } from '@angular/core';
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {

  constructor(private viewPortScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  scrollToSection(sectionName){

    this.viewPortScroller.scrollToAnchor(sectionName);

  }

}
