import {Component } from '@angular/core';
import{CatgeoryService} from '../../services/catgeory.service'
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-catgeory',
  templateUrl: './catgeory.component.html',
  styleUrls: ['./catgeory.component.css']
})

export class CatgeoryComponent {
data:any;
dmsg:string="";

msg=""
categoryForm:FormGroup;

constructor(private fb: FormBuilder,private srvc:CatgeoryService) { 

this.categoryForm = this.fb.group({
  title: ['', [Validators.required]],
  image: [''],
  
});


this.srvc.getCategory().subscribe(result=>{this.data=result})
}

del(id:string){
this.srvc.deleteCategory(id).subscribe(result=>{
this.dmsg=result.response;
if(result.st==1)
this.srvc.getCategory().subscribe(result=>{this.data=result})
})
}

onSubmit() {
this.srvc.saveCategory(this.categoryForm.value.title,this.categoryForm.value.image).subscribe(result=>{
this.msg=result.response;
if(result.st==1)
{
  this.categoryForm.reset();

this.srvc.getCategory().subscribe(result=>{this.data=result})
}
})



} 

onFileSelect(event:any){
    console.log((event.target as HTMLInputElement).files)
    const file = (event.target as HTMLInputElement).files?.[0];
    this.categoryForm.patchValue({image:file });
    this.categoryForm.get('image')?.updateValueAndValidity()
  }

}
