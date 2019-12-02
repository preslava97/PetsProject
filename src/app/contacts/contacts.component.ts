import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ContactsService } from '../services/http-services/contact-service/contact.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit, OnDestroy {
  contactForm: FormGroup;

  private subscription: Subscription;

  constructor(private formBuilder: FormBuilder, private contactsService: ContactsService) {
    this.subscription = new Subscription();
   }

  ngOnInit(): void {
    this.contactForm=this.generateContactForm();
  }

  onSubmitButtonClicked():void {
    if(this.contactForm.valid){
      this.subscription.add(this.contactsService.sendMessage(this.contactForm.value)
      .subscribe((response: any) =>{
        console.log(response);
        this.contactForm.reset();
      },  (errorResponse:HttpErrorResponse) =>{
        console.log(errorResponse.message);
      }
       ));
    }
    else{
      this.contactForm.markAllAsTouched();
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
  generateContactForm(): FormGroup {
    let subjectFormControl = this.formBuilder.control(null,[
      Validators.required
    ]);

    let authorFormControl = this.formBuilder.control(null);

    let messageFormControl= this.formBuilder.control(null, [
      Validators.required
    ]);

    return this.formBuilder.group(
      {
        subject: subjectFormControl,
        message: messageFormControl,
        author: authorFormControl
       
      }
    );
  }

}
