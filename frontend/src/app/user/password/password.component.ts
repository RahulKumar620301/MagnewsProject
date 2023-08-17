import { Component } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';
import {UserService} from '../../services/user.service'


@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {
msg=""
  userForm:FormGroup;
constructor(private fb: FormBuilder,private srvc:UserService) { 


this.userForm = this.fb.group({
  password: ['', [Validators.required]],
  rpassword: ['', [Validators.required]],


  
});

}

 onSubmit() {
  
if(this.userForm.value.password==this.userForm.value.rpassword){ 
this.srvc.chgPwd(this.userForm.value).subscribe(result=>{
  this.msg=result.response;
  if(result.st==1)
    this.userForm.reset();
  })}
else{
this.msg="retype password not matched";
}
} 

}
