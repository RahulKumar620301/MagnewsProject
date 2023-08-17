import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { PasswordComponent } from './password/password.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ResetComponent } from './reset/reset.component';
import { AddarticleComponent } from './addarticle/addarticle.component';
import { ArticlesComponent } from './articles/articles.component';
import {UserAuthGuard} from './user-auth.guard'
import { EditArticleComponent } from './edit-article/edit-article.component';


const routes: Routes = [

{ path: 'register', component: RegisterComponent},
{ path: 'login', component: LoginComponent},
{ path: 'forgot', component: ForgotComponent},
{ path: 'reset', component: ResetComponent},
{ path: '', component: UserComponent, 

children: [
{ path: 'addarticle', component: AddarticleComponent,canActivate:[UserAuthGuard]},
{ path: 'articles', component: ArticlesComponent,canActivate:[UserAuthGuard]},
{ path: 'password', component: PasswordComponent,canActivate:[UserAuthGuard]},
{ path: 'profile', component: ProfileComponent,canActivate:[UserAuthGuard]},
{ path: 'editarticle/:id', component: EditArticleComponent,canActivate:[UserAuthGuard]},

]


}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
