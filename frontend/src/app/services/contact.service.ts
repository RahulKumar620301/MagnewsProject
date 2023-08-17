import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
baseurl="http://localhost:3000/contact"
    constructor(private http: HttpClient) { }

getContacts(){
return this.http.get(this.baseurl)
}

saveContact(data:any){
return this.http.post<any>(this.baseurl,data)
}

}
