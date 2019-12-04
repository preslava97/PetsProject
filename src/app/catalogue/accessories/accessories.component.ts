import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.scss']
})
export class AccessoriesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goBack(): void {
    this.router.navigate(['catalogue']);
  }
  
  askAboutMe(): void {
    this.router.navigate(['contacts']);
  }
}
