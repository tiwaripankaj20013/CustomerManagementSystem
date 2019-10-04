import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { CustomerComponent } from './customer-card/customer/customer.component';
import { CustomerHeaderComponent } from './customer-header/customer-header.component';
@NgModule({
    imports: [
    BrowserModule,
  ],
  declarations: [
    CustomerCardComponent,
    CustomerComponent,
    CustomerHeaderComponent
  ],
  exports:[
    CustomerCardComponent,
    CustomerHeaderComponent
  ],
  providers: [],
  bootstrap: [CustomerCardComponent]
})
export class CustomerModule { }
