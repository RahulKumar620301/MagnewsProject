import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { CatgeoryComponent } from './catgeory/catgeory.component';
import { ArticlesComponent } from './articles/articles.component';
import { ContactsComponent } from './contacts/contacts.component';
import { UsersComponent } from './users/users.component';
import {AdminAuthGuard} from './admin-auth.guard'


const routes: Routes = [

{ path: 'login', component: LoginComponent},

{ path: '', component: AdminComponent ,

  children: [
{ path: 'catgeory', component: CatgeoryComponent,canActivate:[AdminAuthGuard]},
{ path: 'articles', component: ArticlesComponent,canActivate:[AdminAuthGuard]},
{ path: 'contacts', component: ContactsComponent,canActivate:[AdminAuthGuard]},
{ path: 'users', component: UsersComponent,canActivate:[AdminAuthGuard]},

]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
