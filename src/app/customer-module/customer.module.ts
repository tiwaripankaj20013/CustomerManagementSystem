import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CustomerApiService } from './services/customer-api.service';

import { CustomerHeaderComponent } from './customer-header/customer-header.component';
import { CustomerComponent } from './customer-card/customer/customer.component';
import { CustomerCardViewComponent } from './customer-card/customer-card.component';
import { CustomerListViewComponent } from './customer-list/customer-list.component';
import { CustomerTableViewComponent } from './customer-table/customer-table.component';
import {CUSTOMER_ROUTES} from './customer-routing.configure'
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    CUSTOMER_ROUTES
	  
  ],
  declarations: [
    CustomerHeaderComponent,
    CustomerComponent,
    CustomerCardViewComponent,
    CustomerListViewComponent,
    CustomerTableViewComponent
  ],
  exports: [
    CustomerHeaderComponent,
    CustomerCardViewComponent,
    CustomerListViewComponent,
    CustomerTableViewComponent,
    
  ],
  providers: [
    CustomerApiService,
    { provide: 'teamName', useValue: 'UI Hustlers' }
  ],
 
})
export class CustomerModule { }
