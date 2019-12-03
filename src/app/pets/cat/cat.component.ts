import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss']
})
export class CatComponent implements OnInit, OnDestroy {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  goBack(): void{
    this.router.navigate(['pets']);
  }

  askAboutMe(): void{
    this.router.navigate(['contacts']);
  }

}
