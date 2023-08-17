import { Component } from '@angular/core';
import{ArticleService} from '../../services/article.service'
import {Article} from '../../interface/article'
import{NewsService} from '../../services/news.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data:any;
  ndata:any;

constructor(private srvc:ArticleService,private nsrvc:NewsService) { 
this.srvc.getRecentArticles().subscribe(result=>{this.data=result})
this.nsrvc.getNews('general',6).subscribe(result=>{this.ndata=result.articles})
}

}

