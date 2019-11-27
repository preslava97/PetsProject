import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.generateLoginForm();
  }


  onSignInButtonClicked(): void {
    if(this.loginForm.valid) {

    }
    else {
      this.loginForm.markAllAsTouched()
    }
  }

  onSignUpButtonClicked(): void {
    // TODO: ...
  }

  private generateLoginForm(): FormGroup {
    let usernameFormControl = this.formBuilder.control(null, [Validators.required]);

    
    let passwordFormControl = this.formBuilder.control(null, [Validators.required]);

    return this.formBuilder.group({
      username: usernameFormControl,
      password: passwordFormControl
    });
  }
}
