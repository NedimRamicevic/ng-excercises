import { Component } from '@angular/core';
import contacts from 'src/app/contacts.json'

interface Contacts {
  id: Number;
  name: String;
  email: String;
  phone: String;
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactList: Contacts[] = contacts
}
