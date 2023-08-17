import { Component } from '@angular/core';
import{NewsService} from '../../services/news.service'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-snews',
  templateUrl: './snews.component.html',
  styleUrls: ['./snews.component.css']
})
export class SnewsComponent {
data:any;

constructor(private srvc:NewsService, private route: ActivatedRoute) { 
this.route.params.subscribe(res=>{
this.srvc.getSNews(res['type']).subscribe(result=>{this.data=result.articles})
})

}

}
