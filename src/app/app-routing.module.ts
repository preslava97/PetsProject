import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FAQComponent } from './faq/faq.component';
import { AppComponent } from './app.component';
import { PetsComponent } from './pets/pets.component';
import { UserComponent } from './user/user.component';
import { LogComponent } from './log/log.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { DogComponent } from './pets/dog/dog.component';
import { ParrotComponent } from './pets/parrot/parrot.component';
import { CatComponent } from './pets/cat/cat.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomepageComponent
  },
  {
    path: 'contacts', component: ContactsComponent
  },
  {
    path: 'faq', component: FAQComponent
  },
  {
    path: 'pets', component: PetsComponent
  },
  {
    path: 'pets/dog', component: DogComponent
  },
  {
    path: 'pets/cat', component: CatComponent
  },
  {
    path: 'pets/parrot', component: ParrotComponent
  },
  {
    path: 'user', component: UserComponent
  },
  {
    path: 'catalogue', component: CatalogueComponent
  },
  {
    path: 'log', component: LogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }