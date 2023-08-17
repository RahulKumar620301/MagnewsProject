import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatgeoryService {

  baseurl="http://localhost:3000/category"
    constructor(private http: HttpClient) { }

getCategory(){
return this.http.get(this.baseurl)
}

saveCategory(title:string,image:File){
let data=new FormData();
data.append('title',title)
data.append('image',image,image.name)
return this.http.post<any>(this.baseurl,data)
}


deleteCategory(id:string){
  return this.http.delete<any>(this.baseurl+'/'+id)
}
}
