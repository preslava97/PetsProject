import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  open(item: string){
    if(item==="food"){
      this.router.navigate(['catalogue/food']);
    } else if(item==="accessories"){
      this.router.navigate(['catalogue/accessories']);
    }
  }
}
