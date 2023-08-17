import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { CatgeoryComponent } from './catgeory/catgeory.component';
import { ArticlesComponent } from './articles/articles.component';
import { ContactsComponent } from './contacts/contacts.component';
import { UsersComponent } from './users/users.component';
import{ FormsModule } from '@angular/forms'
import {ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent,
    CatgeoryComponent,
    ArticlesComponent,
    ContactsComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ]
})
export class AdminModule { }
