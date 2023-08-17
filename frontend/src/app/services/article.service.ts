import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
baseurl="http://localhost:3000/article"
userId=localStorage.getItem("userId")||"";

    constructor(private http: HttpClient) { }

getArticles(){
return this.http.get<any>(this.baseurl)
}

getPublishArticles(category:string){
return this.http.get(this.baseurl+"/Publish/"+category)
}

getRecentArticles(){
return this.http.get(this.baseurl+"/Recent")
}

getUserArticles(){
return this.http.get(this.baseurl+"/user/"+this.userId)
}

getArticle(id:string){
return this.http.get<any>(this.baseurl+"/"+id)
}

editArticleData(id:string,data:any){
return this.http.patch<any>(this.baseurl+"/data/"+id,data)
}

editArticle(id:string,title:string,content:string,category:string,image:File){
let data=new FormData();
data.append('title',title)
data.append('content',content)
data.append('category',category)
data.append('image',image,image.name)
return this.http.patch<any>(this.baseurl+"/"+id,data)
}

updateStatus(id:string,data:any){
return this.http.patch<any>(this.baseurl+"/status/"+id,data)
}

saveArticle(title:string,content:string,category:string,image:File){
let data=new FormData();
data.append('title',title)
data.append('content',content)
data.append('userId',this.userId)
data.append('category',category)
data.append('image',image,image.name)
return this.http.post<any>(this.baseurl,data)
}

deleteArticle(id:string){
  return this.http.delete<any>(this.baseurl+'/'+id)
}


}
