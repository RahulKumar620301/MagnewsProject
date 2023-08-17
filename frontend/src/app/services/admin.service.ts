import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
providedIn: 'root'
})
export class AdminService {
baseurl="http://localhost:3000/admin";

constructor(private http: HttpClient) { }

loginAdmin(data:any){
return this.http.post<any>(this.baseurl+"/login",data)
}

  islogin(){
    let u=localStorage.getItem('adminId');
    return !!u;
  }


  }