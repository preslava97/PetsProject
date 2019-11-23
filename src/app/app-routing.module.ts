import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FAQComponent } from './faq/faq.component';
import { AppComponent } from './app.component';
import { PetsComponent } from './pets/pets.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }