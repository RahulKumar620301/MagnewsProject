import { Component } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';
import {UserService} from '../../services/user.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
msg=""

  userForm:FormGroup;

constructor(private fb: FormBuilder,private srvc:UserService) { 

this.srvc.getUser().subscribe(result=>{

this.userForm.setValue({
firstName:result.firstName,
lastName:result.lastName,
emailId:result.emailId,
phoneNo:result.phoneNo,
city:result.city,
dob:result.dob,
gender:result.gender
})
})


this.userForm = this.fb.group({
  firstName: ['', [Validators.required,Validators.pattern('[A-Za-z]{2,10}')]],
  lastName: ['', [Validators.required,Validators.pattern('[A-Za-z]{2,10}')]],
  emailId: ['', [Validators.required,Validators.email]],
  phoneNo: ['', [Validators.required,Validators.pattern('[0-9]{10}')]],
  city: ['', [Validators.required]],
  dob: ['', [Validators.required]],
  gender: ['', [Validators.required]],

  
});

}
 onSubmit() {
this.srvc.editUser(this.userForm.value).subscribe(result=>{
  this.msg=result.response; 
  })
} 


}
