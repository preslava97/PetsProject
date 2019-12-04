import { Component, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { SlideshowModule } from 'ng-simple-slideshow';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() { }

  redirectTo(page: string): void {
    switch (page) {
      case "home": {
        this.router.navigate(['home']);
        break;
      }
      case "dogs": {
        this.router.navigate(['pets/dog']);
        break;
      }
      case "pets": {
        this.router.navigate(['pets']);
        break;
      }
      case "parrot": {
        this.router.navigate(['pets/parrot']);
        break;
      }
      case "food":{
        this.router.navigate(['catalogue/food']);
      }
    }


  }
}




