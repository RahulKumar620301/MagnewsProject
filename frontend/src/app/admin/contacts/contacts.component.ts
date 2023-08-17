import { Component } from '@angular/core';
import {ContactService} from '../../services/contact.service'
import {Contact} from '../../interface/contact'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {

data:any;
constructor(private srvc:ContactService) { 

this.srvc.getContacts().subscribe(result=>{this.data=result})

}


}
