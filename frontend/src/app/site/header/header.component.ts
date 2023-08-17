import { Component } from '@angular/core';
import{CatgeoryService} from '../../services/catgeory.service'
import {Catgeory} from '../../interface/catgeory'
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';
import {Router} from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
data:any;
srchForm:FormGroup;

ndata=['world', 'business', 'technology', 'entertainment', 'sports', 'science','health']
constructor(private srvc:CatgeoryService,private fb: FormBuilder, private router:Router) { 

this.srchForm = this.fb.group({
  query: ['',[Validators.required]],
  });

this.srvc.getCategory().subscribe(result=>{this.data=result})
}

onSubmit() {
let url="/site/snews/"+this.srchForm.value.query
this.router.navigateByUrl(url)
   
}



}

