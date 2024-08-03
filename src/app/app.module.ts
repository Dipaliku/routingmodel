import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './shared/compoent/home/home.component';
import { UsersComponent } from './shared/compoent/users/users.component';
import { ProductsComponent } from './shared/compoent/products/products.component';
import { NavbarComponent } from './shared/compoent/navbar/navbar.component';
import { AppRoutingModule } from './app-routing modules';
import {MatButtonModule} from '@angular/material/button';
import { NoPageFoundComponent } from './shared/compoent/no-page-found/no-page-found.component';
import { UserComponent } from './shared/compoent/user/user.component';
import { UserFormComponent } from './shared/compoent/user-form/user-form.component';
import { ProductComponent } from './shared/compoent/products/product/product.component';
import { ProductFormComponent } from './shared/compoent/products/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ProductsComponent,
    NavbarComponent,
    NoPageFoundComponent,
    UserComponent,
    UserFormComponent,
    ProductComponent,
    ProductFormComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
