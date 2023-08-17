import { Component } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';
import {UserService} from '../../services/user.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent {
msg=""

  userForm:FormGroup;

constructor(private fb: FormBuilder,private srvc:UserService,
  private router:Router) { 

this.userForm = this.fb.group({
  
  emailId: ['', [Validators.required,Validators.email]],
  
  
});
}


onSubmit() {
  let email=this.userForm.value.emailId;
  let code=Math.floor(1000 + Math.random() * 9000);

this.srvc.forgetPwd({emailId:email,code:code}).subscribe(result=>{
  this.msg=result.response;
  if(result.st==1)
    localStorage.setItem("email",email)
    localStorage.setItem("code",code.toString())
    this.router.navigateByUrl("user/reset")
    
  })}
}
