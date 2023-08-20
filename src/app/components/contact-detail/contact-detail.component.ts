import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ContactsService } from 'src/app/services/contacts.service';

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

  contact : Contacts = {
    id: 0,
    name: '',
    email: '',
    phone: ''
  };

  constructor(private route: ActivatedRoute, private contactsService: ContactsService) {
  }
   


  ngOnInit(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.contact = this.contactsService.getContact(id);
     
  }

}
