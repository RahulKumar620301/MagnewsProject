import { Component } from '@angular/core';
import{NewsService} from '../../services/news.service'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  data:any;

constructor(private srvc:NewsService, private route: ActivatedRoute) { 
this.route.params.subscribe(res=>{
this.srvc.getNews(res['type']).subscribe(result=>{this.data=result.articles})
})

}


}
