import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { ApiCallComponent } from './api-call/api-call.component';
import { HttpClientModule } from '@angular/common/http';
import { BindingComponent } from './binding/binding.component';
@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    CartComponent,
    ApiCallComponent,
    BindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
