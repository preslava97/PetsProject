import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {
  showShortDesciption = true;

 alterDescriptionText() {
    this.showShortDesciption = !this.showShortDesciption;
 }
  constructor() { }

  ngOnInit() {
  }

}
