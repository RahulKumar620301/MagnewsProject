import { Component } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';
import {UserService} from '../../services/user.service'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
msg=""

userForm:FormGroup;

constructor(private fb: FormBuilder, private srvc:UserService) { 

this.userForm = this.fb.group({
  firstName: ['', [Validators.required,Validators.pattern('[A-Za-z]{2,10}')]],
  lastName: ['', [Validators.required,Validators.pattern('[A-Za-z]{2,10}')]],
  emailId: ['', [Validators.required,Validators.email]],
  phoneNo: ['', [Validators.required,Validators.pattern('[0-9]{10}')]],
  password: ['', [Validators.required]],
  rpassword: ['', [Validators.required]],
  
});

}

 onSubmit() {

 if(this.userForm.value.password==this.userForm.value.rpassword){ 
this.srvc.saveUser(this.userForm.value).subscribe(result=>{
  this.msg=result.response;
  if(result.st==1)
    this.userForm.reset();
  })}
else{
this.msg="retype password not matched";
}
}

}
