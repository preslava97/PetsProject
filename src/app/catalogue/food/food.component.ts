import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {
  constructor(private router: Router) { }


  ngOnInit() {
  }
    goBack(): void {
      this.router.navigate(['catalogue']);
    }

  }


