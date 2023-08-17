import { Component } from '@angular/core';
import{ArticleService} from '../../services/article.service'
import {Article} from '../../interface/article'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
data:any;
constructor(private srvc:ArticleService) { 
this.srvc.getArticles().subscribe(result=>{this.data=result})
}
}
