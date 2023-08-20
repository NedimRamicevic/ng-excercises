import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import contacts from 'src/app/contacts.json'

interface Contacts {
  id: Number;
  name: String;
  email: String;
  phone: String;
}

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }
    contact : any

  ngOnInit(){
     let id = this.route.snapshot.params['id'];
     let contactList: Contacts[] = contacts
     this.contact = contactList.find(contact => contact.id == id);
  }

}
