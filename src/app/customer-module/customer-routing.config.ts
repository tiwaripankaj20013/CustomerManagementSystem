import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const CUSTOMER_ROUTES : Routes = [
	{path='',component:CustomerCardComponent},
	{path='showCustomerCardView',component:CustomerCardComponent},
	{path='showCustomerCardView',component:CustomerCardComponent},
	{path='showCustomerCardView',component:CustomerCardComponent},
	{path='showCustomerCardView',component:CustomerCardComponent},
];

export const CUSTOMER_ROUTES = RouterModule.forRoot(CUSTOMER_ROUTES);
  