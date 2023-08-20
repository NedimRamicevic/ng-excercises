import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  protected contacts: any[] = [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@gmail.com",
      "phone": "111-111-1111",
      "company": "Company One"
    },
    {
      "id": 2,
  
      "name": "Karen Williams",
      "email": "karen@gmail.com",
      "phone": "222-222-2222",
      "company": "Company Two"
    },
    {
      "id": 3,
  
      "name": "Henry Johnson",
      "email": "henry@gmail.com",
      "phone": "333-333-3333",
      "company": "Company Three"
    }
  ];

  constructor() { }

  getContacts() {
    return this.contacts;
  }

  getContact(id: number) {
    return this.contacts.find(contact => contact.id === id);
  }
}
