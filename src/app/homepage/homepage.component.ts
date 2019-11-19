import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  showFiller: boolean;


  constructor() { }

  ngOnInit() {
  }


  buttonClick(){
    this.showFiller = !this.showFiller;
  }
}




