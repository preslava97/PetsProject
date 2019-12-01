import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gothere(pet: string): void {
    switch (pet) {
      case "dog": {
        this.router.navigate(['pets/dog']);
        break;
      } case "cat": {
        this.router.navigate(['pets/cat']);
        break;
      } case "parrot": {
        this.router.navigate(['pets/parrot']);
      }
    }
  }

}
