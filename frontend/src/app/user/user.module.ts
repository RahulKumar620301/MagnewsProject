import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { PasswordComponent } from './password/password.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ResetComponent } from './reset/reset.component';
import { AddarticleComponent } from './addarticle/addarticle.component';
import { ArticlesComponent } from './articles/articles.component';
import{ FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { EditArticleComponent } from './edit-article/edit-article.component';


@NgModule({
  declarations: [
    UserComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    PasswordComponent,
    ForgotComponent,
    ResetComponent,
    AddarticleComponent,
    ArticlesComponent,
    EditArticleComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularEditorModule
  ]
})
export class UserModule { }
