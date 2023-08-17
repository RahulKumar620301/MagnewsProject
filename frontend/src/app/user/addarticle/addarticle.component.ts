import {Component } from '@angular/core';
import{CatgeoryService} from '../../services/catgeory.service'
import{ArticleService} from '../../services/article.service'
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-addarticle',
  templateUrl: './addarticle.component.html',
  styleUrls: ['./addarticle.component.css']
})

export class AddarticleComponent {
data:any;

msg=""
articleForm:FormGroup;

editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: '150px',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: 'Calibri',
      defaultFontSize: '2',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      [],
      [    'customClasses',
    'link',
    'unlink',
    'insertImage',
    'insertVideo',
    'insertHorizontalRule',
]
    ]
};




constructor(private fb: FormBuilder,private srvc:CatgeoryService,private asrvc:ArticleService) { 

this.articleForm = this.fb.group({
  title: ['', [Validators.required]],
  image: [''],
  content: ['', [Validators.required]],
  category: ['', [Validators.required]],
});


this.srvc.getCategory().subscribe(result=>{this.data=result})
}


onSubmit() {
this.asrvc.saveArticle(this.articleForm.value.title,this.articleForm.value.content,this.articleForm.value.category,
  this.articleForm.value.image).subscribe(result=>{
this.msg=result.response;
if(result.st==1)
{
  this.articleForm.reset();
}
})



} 

onFileSelect(event:any){
    console.log((event.target as HTMLInputElement).files)
    const file = (event.target as HTMLInputElement).files?.[0];
    this.articleForm.patchValue({image:file });
    this.articleForm.get('image')?.updateValueAndValidity()
  }

}
