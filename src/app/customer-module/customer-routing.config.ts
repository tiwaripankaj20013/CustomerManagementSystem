import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const CUSTOMER_ROUTES : Routes = [
	{path='',component:CustomerCardViewComponent},
	{path='showCustomerCardView',component:CustomerCardViewComponent},
	{path='showCustomerListView',component:CustomerListViewComponent},
	{path='showCustomerCardView',component:CustomerTableViewComponent},
];

export const CUSTOMER_ROUTES = RouterModule.forRoot(CUSTOMER_ROUTES);
  

