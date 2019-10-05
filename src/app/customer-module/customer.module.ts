import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CustomerApiService } from './services/customer-api.service';
import { CUSTOMER_ROUTES } from './customer-routes.config';


import { CustomerHeaderComponent } from './customer-header/customer-header.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { CustomerComponent } from './customer-card/customer/customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerTableComponent } from './customer-table/customer-table.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
	CUSTOMER_ROUTES
  ],
  declarations: [
    CustomerHeaderComponent,
    CustomerCardComponent,
    CustomerComponent,
    CustomerListComponent,
    CustomerTableComponent
  ],
  exports: [
    CustomerHeaderComponent,
    CustomerCardComponent,
    CustomerListComponent,
    CustomerTableComponent
  ],
  providers: [
    CustomerApiService,
    { provide: 'teamName', useValue: 'UI Hustlers' }
  ],
 
})
export class CustomerModule { }
