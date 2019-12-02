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
import { UserComponent } from './user/user.component';
import { LogComponent } from './log/log.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CatalogueComponent } from './catalogue/catalogue.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import { DogComponent } from './pets/dog/dog.component';
import { CatComponent } from './pets/cat/cat.component';
import { ParrotComponent } from './pets/parrot/parrot.component';
import { FoodComponent } from './catalogue/food/food.component';
import { AccessoriesComponent } from './catalogue/accessories/accessories.component';
import { HttpClientModule } from '@angular/common/http';
import { PetsService } from './services/http-services/pets-service/pets.service';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FAQComponent,
    ContactsComponent,
    PetsComponent,
    UserComponent,
    LogComponent,
    CatalogueComponent,
    DogComponent,
    CatComponent,
    ParrotComponent,
    FoodComponent,
    AccessoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    SlideshowModule,
    HttpClientModule
  ],
  exports: [
    MatSidenavModule
  ],
  providers: [
    PetsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
