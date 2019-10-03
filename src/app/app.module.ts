import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CustomerListComponent } from './customerlist/customer-list.component';
import { CustomerComponent } from './customerlist/customer.component';

@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [CustomerListComponent]
})
export class AppModule { }
