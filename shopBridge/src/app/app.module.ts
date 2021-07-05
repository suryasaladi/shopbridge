import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { InventoryComponent } from './inventory/inventory.component';
import {ProductService} from './product.service'
import { HttpClientModule } from '@angular/common/http';
import { AddUpdateComponent } from './add-update/add-update.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InventoryComponent,
    AddUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
