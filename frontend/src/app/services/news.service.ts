import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
k="3ebd247785f23f0a71715cd6c65fa24d"
baseurl="https://gnews.io/api/v4/top-headlines?apikey="+this.k+"&lang=en&country=in&category="
sbaseurl="https://gnews.io/api/v4/search?apikey="+this.k+"&lang=en&country=in&q="

constructor(private http: HttpClient) { }


getNews(category:string,m=10){
return this.http.get<any>(this.baseurl+category+"&max="+m)
}
getSNews(q:string){
return this.http.get<any>(this.sbaseurl+q)
}

}
