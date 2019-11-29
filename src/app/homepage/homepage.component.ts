import { Component, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import {SlideshowModule} from 'ng-simple-slideshow';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  showFiller: boolean = false;


  constructor(private router: Router) {   }

  ngOnInit() {}

  openLogIn(): void {(this.router.navigate(['log']));
  }


  buttonClick() {
    this.showFiller = !this.showFiller;
  }
}




