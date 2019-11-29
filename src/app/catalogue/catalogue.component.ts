import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {

  // showFiller: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  

  // openCatalogue() :void {
  //   (this.router.navigate(['pets/catalogue']));
  // }

  // buttonClick() {
  //   this.showFiller = !this.showFiller;
  // }
}
