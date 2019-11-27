import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  log: string;
  user: string;
  
  constructor(private router: Router) { }

  login(): void{
    if(this.log == 'admin' && this.user == 'admin'){
      this.router.navigate(["homepage"]);
    } else{
      alert("Please, enter again");
    }
  }
  ngOnInit() {
  }

}
