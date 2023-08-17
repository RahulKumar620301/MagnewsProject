import { Component } from '@angular/core';
import {AdminService} from '../../services/admin.service'
import {Router} from '@angular/router'
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
msg=""

userForm:FormGroup;

constructor(private fb: FormBuilder,private srvc:AdminService,
  private router:Router) { 

this.userForm = this.fb.group({
  username: ['', [Validators.required]],
  password: ['', [Validators.required]],
  
});
}

onSubmit() {
this.srvc.loginAdmin(this.userForm.value).subscribe(result=>{
  this.msg=result.response;
  if(result.st==1)
    this.router.navigateByUrl("admin/articles")
    localStorage.setItem("adminId",result.adminId)
  })}

}
