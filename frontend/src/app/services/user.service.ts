import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
baseurl="http://localhost:3000/user"
userId=localStorage.getItem("userId");

constructor(private http: HttpClient) { }

getUsers(){
return this.http.get(this.baseurl)
}

getUser(){
return this.http.get<any>(this.baseurl+"/"+this.userId)
}

saveUser(data:any){
return this.http.post<any>(this.baseurl,data)
}
  
loginUser(data:any){
return this.http.post<any>(this.baseurl+"/login",data)
}

editUser(data:any){
return this.http.patch<any>(this.baseurl+"/"+this.userId,data)
} 
   
chgPwd(data:any){
return this.http.patch<any>(this.baseurl+"/pwd/"+this.userId,data)
} 

forgetPwd(data:any){
return this.http.post<any>(this.baseurl+"/forget",data)
}  

resetPwd(data:any,emailId:any){
return this.http.patch<any>(this.baseurl+"/resetpwd/"+emailId,data)
} 

  islogin(){
    let u=localStorage.getItem('userId');
    return !!u;
  }

}
