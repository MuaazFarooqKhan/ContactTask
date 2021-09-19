import { Email } from './../../Models/Contacts/email.model';
import { Injectable } from '@angular/core';
import { Contacts } from 'src/app/Models/Contacts/contacts.model' 
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
  
export class ContactsService {

  emails: Email[]=[]
  
  contact : Contacts[]=
  [
      new Contacts(1, 'contact 1', 'This is contact 1 description'),
      new Contacts(2, 'contact 2', 'This is contact 2 description'),
      new Contacts(3, 'contact 3','This is contact 3 description'),
  ]

  constructor(private _http: HttpClient) { }
  options: any = {
    headers: HttpHeaders
  }

  getAllContacts(): Observable<Contacts[]> {
    this.setOptions()
    return this._http.get<Contacts[]>("Add URL HERE   /contacts");
  }

  setOptions() {
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + token
    });
    this.options = { headers: headers };
  }
  getContactId(id: Number): Observable <Email[]> {
    return this._http.post<Email[]>('url/contact/',id);
  }
}
