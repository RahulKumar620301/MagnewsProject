import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { SiteComponent } from './site.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { ArticleComponent } from './article/article.component';
import { NewsComponent } from './news/news.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import{ FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { SnewsComponent } from './snews/snews.component';


@NgModule({
  declarations: [
    SiteComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent,
    ArticleComponent,
    NewsComponent,
    FooterComponent,
    HeaderComponent,
    SnewsComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
        FormsModule,
    ReactiveFormsModule
  ]
})
export class SiteModule { }
