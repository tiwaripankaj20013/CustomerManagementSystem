import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer-card/customer/customer.component';
import { CustomerCardViewComponent } from './customer-card/customer-card.component';
import { CustomerListViewComponent } from './customer-list/customer-list.component';
import { CustomerTableViewComponent } from './customer-table/customer-table.component';

const CUSTOMER_ROUTES_List : Routes = [
	{path:'',component:CustomerCardViewComponent},
	{path:'showCustomerCardView',component:CustomerCardViewComponent},
	{path:'showCustomerListView',component:CustomerListViewComponent},
	{path:'showCustomerTableView',component:CustomerTableViewComponent},
];

 

export const CUSTOMER_ROUTES = RouterModule.forRoot(CUSTOMER_ROUTES_List);
  

