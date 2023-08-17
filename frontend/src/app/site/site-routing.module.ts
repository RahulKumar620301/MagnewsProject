import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteComponent } from './site.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { ArticleComponent } from './article/article.component';
import { NewsComponent } from './news/news.component';
import { SnewsComponent } from './snews/snews.component';

const routes: Routes = [
  { path: '', component: SiteComponent,

 children: [
      { path: 'home', component: HomeComponent},
      { path: 'about', component: AboutComponent},
      { path: 'article/:id', component: ArticleComponent},
      { path: 'blog/:type', component: BlogComponent},
      { path: 'contact', component: ContactComponent},
      { path: 'news/:type', component: NewsComponent},
      { path: 'snews/:type', component: SnewsComponent}
    
     ]


   }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
