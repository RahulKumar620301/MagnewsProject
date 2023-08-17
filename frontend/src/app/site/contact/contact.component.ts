import { Component } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';
import {ContactService} from '../../services/contact.service'


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
msg=""
contactForm:FormGroup;

constructor(private fb: FormBuilder, private srvc:ContactService) { 

this.contactForm = this.fb.group({
  firstName: ['', [Validators.required,Validators.pattern('[A-Za-z]{2,10}')]],
  lastName: ['', [Validators.required,Validators.pattern('[A-Za-z]{2,10}')]],
  emailId: ['', [Validators.required,Validators.email]],
  phoneNo: ['', [Validators.required,Validators.pattern('[0-9]{10}')]],
  message: ['',[Validators.required]],
  
});

}

 onSubmit() {
  this.srvc.saveContact(this.contactForm.value).subscribe(result=>{
  this.msg=result.response;
  if(result.st==1)
    this.contactForm.reset();
  })

} 

}
