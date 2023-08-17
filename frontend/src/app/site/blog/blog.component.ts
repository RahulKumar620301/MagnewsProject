import { Component } from '@angular/core';
import{ArticleService} from '../../services/article.service'
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
data:any;

constructor(private srvc:ArticleService, private route: ActivatedRoute) { 
this.route.params.subscribe(res=>{
this.srvc.getPublishArticles(res['type']).subscribe(result=>{this.data=result})
})

}
}
