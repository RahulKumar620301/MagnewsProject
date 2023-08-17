import { Component } from '@angular/core';
import{UserService} from '../../services/user.service'
import {User} from '../../interface/user'


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  data:any;
constructor(private srvc:UserService) { 

this.srvc.getUsers().subscribe(result=>{this.data=result})

}

}
