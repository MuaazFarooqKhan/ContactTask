import { EmailsComponent } from './Components/Emails/emails.component';
import { ContactsComponent } from './Components/Contacts/contacts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: EmailsComponent },
  { path: 'single', component: ContactsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
