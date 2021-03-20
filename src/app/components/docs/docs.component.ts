import { Component, OnInit } from '@angular/core';
import {ViewportScroller} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {

  constructor(private viewPortScroller: ViewportScroller, private router: Router) { }

  ngOnInit(): void {
  }

  scrollToSection(sectionName){

    this.viewPortScroller.scrollToAnchor(sectionName);

  }

  goToJavascriptGuide(){
    this.router.navigate(['learn-js']);
    window.scroll(0, 0);
  }

}
