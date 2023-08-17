import { Component } from '@angular/core';
import{ArticleService} from '../../services/article.service'
import {Article} from '../../interface/article'


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
dmsg=""
  data:any;
constructor(private srvc:ArticleService) { 
this.srvc.getArticles().subscribe(result=>{this.data=result})
}


update(id:string,s:string){
  this.srvc.updateStatus(id,{status:s}).subscribe(result=>{
    this.dmsg=result.response;
    if(result.st==1)
    this.srvc.getArticles().subscribe(result=>{this.data=result})
  
  })
}
}
