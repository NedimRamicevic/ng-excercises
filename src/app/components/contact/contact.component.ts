import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';

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
export class ContactComponent implements OnInit {
    
    contactList: Contacts[] = [];
    constructor(private contactsService: ContactsService) { }
  
    ngOnInit(): void {
      this.contactList = this.contactsService.getContacts();
    }
}
