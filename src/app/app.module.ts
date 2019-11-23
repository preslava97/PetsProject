import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSidenavModule} from '@angular/material/sidenav';
import { FAQComponentComponent } from './faqcomponent/faqcomponent.component';
import { ContactsComponentComponent } from './contacts-component/contacts-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
<<<<<<< HEAD
=======
    FAQComponentComponent,
    ContactsComponentComponent
>>>>>>> b762f8f10d8701173c46f7dc0c59a1626d997f18
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
