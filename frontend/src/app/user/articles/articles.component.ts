import { Component } from '@angular/core';
import{ArticleService} from '../../services/article.service'
import {Article} from '../../interface/article'

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
data:any;
dmsg:string=""
constructor(private srvc:ArticleService) { 

this.srvc.getUserArticles().subscribe(result=>{this.data=result})

}
del(id:string){
  this.srvc.deleteArticle(id).subscribe(result=>{
    this.dmsg=result.response;
    if(result.st==1)
    this.srvc.getUserArticles().subscribe(result=>{this.data=result})
  
  })
}
}
