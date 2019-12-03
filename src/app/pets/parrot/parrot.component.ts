import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-parrot',
  templateUrl: './parrot.component.html',
  styleUrls: ['./parrot.component.scss']
})
export class ParrotComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goBack(): void {
    this.router.navigate(['pets']);
  }

  askAboutMe(): void {
    this.router.navigate(['contacts']);
  }
}
