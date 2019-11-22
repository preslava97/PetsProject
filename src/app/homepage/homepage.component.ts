import { Component, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  showFiller: boolean = false;


  constructor() {   }

  ngOnInit() {
  }


  buttonClick(){
    this.showFiller = !this.showFiller;
  }
}




