import { Component } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';
import {UserService} from '../../services/user.service'
import {Router} from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
msg=""

userForm:FormGroup;

constructor(private fb: FormBuilder,private srvc:UserService,
  private router:Router) { 

this.userForm = this.fb.group({
  emailId: ['', [Validators.required,Validators.email]],
  password: ['', [Validators.required]],
  
});
}

onSubmit() {
this.srvc.loginUser(this.userForm.value).subscribe(result=>{
  this.msg=result.response;
  if(result.st==1)
    this.router.navigateByUrl("user/profile")
    localStorage.setItem("userId",result.userId)
  })}
}
