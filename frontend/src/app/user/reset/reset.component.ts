import { Component } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';
import {UserService} from '../../services/user.service'

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent {
userForm:FormGroup;
msg=""

constructor(private fb: FormBuilder,private srvc:UserService) { 

this.userForm = this.fb.group({

  code: ['', [Validators.required]],
  password: ['', [Validators.required]],
  rpassword: ['', [Validators.required]],
  
});
}
 onSubmit() {
  let code=localStorage.getItem("code");
  let email=localStorage.getItem("email");
if(this.userForm.value.code==code){ 
if(this.userForm.value.password==this.userForm.value.rpassword){ 
this.srvc.resetPwd(this.userForm.value,email).subscribe(result=>{
  this.msg=result.response;
  if(result.st==1)
    this.userForm.reset();
    localStorage.removeItem("code");
    localStorage.removeItem("email");
  })}
else{
this.msg="retype password not matched";
}}
else{
this.msg="Verify code not matched";
}
}

}
