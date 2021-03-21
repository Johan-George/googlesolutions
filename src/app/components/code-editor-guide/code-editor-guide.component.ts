import { Component, OnInit } from '@angular/core';
import {ViewportScroller} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-code-editor-guide',
  templateUrl: './code-editor-guide.component.html',
  styleUrls: ['../docs/docs.component.css']
})
export class CodeEditorGuideComponent implements OnInit {

  constructor(private viewPortScroller: ViewportScroller, private router: Router) { }

  ngOnInit(): void {
  }

  scrollToSection(sectionName){

    this.viewPortScroller.scrollToAnchor(sectionName);

  }

  goToDocs(){
    this.router.navigate(['docs']);
    window.scroll(0,0 );
  }

}