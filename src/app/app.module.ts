import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSidenavModule} from '@angular/material/sidenav';
import { FAQComponent } from './faq/faq.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PetsComponent } from './pets/pets.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { LogComponent } from './log/log.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FAQComponent,
    ContactsComponent,
    PetsComponent,
    LoginComponent,
    UserComponent,
    LogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule
  ],
  exports: [
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
