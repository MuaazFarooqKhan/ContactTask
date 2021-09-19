import { Email } from './../../Models/Contacts/email.model';
import { ContactsService } from 'src/app/Services/Contacts/contacts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.scss']
})
export class EmailsComponent implements OnInit {

  Data :any = []
  constructor(    private _serviceContact: ContactsService, private _emails:Email
  ) { }
  

  ngOnInit(): void {
    this.Data = this._emails
  }

}
