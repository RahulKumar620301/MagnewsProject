import { Component } from '@angular/core';
import{ArticleService} from '../../services/article.service'
import {Article} from '../../interface/article'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
d:any;

constructor(private srvc:ArticleService, private route: ActivatedRoute) { 
this.route.params.subscribe(res=>{
this.srvc.getArticle(res['id']).subscribe(result=>{this.d=result})
})

}

}
