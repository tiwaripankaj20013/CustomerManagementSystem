import { Routes, RouterModule } from '@angular/router';
import { CustomerHomeComponent } from './customer-module/customer-home/customer-home.component';
import { LoginComponent } from './login/login.component';
import { OrderHomeComponent } from './order-module/order-home/order-home.component';
import {AboutComponent} from './about/about.component';
import { from } from 'rxjs';

import {CustomerCardViewComponent} from './customer-module/customer-home/customer-card/customer-card.component';
import {CustomerListViewComponent} from './customer-module/customer-home/customer-list/customer-list.component';
import {CustomerTableViewComponent} from './customer-module/customer-home/customer-table/customer-table.component';

// customer child comonent binding


const APP_ROUTES_List : Routes = [
	{path:'', redirectTo :'customers',pathMatch : 'full'},
	{path:'customers',component:CustomerHomeComponent,

	children:[
		{path:'',redirectTo :'showCustomerCardView',pathMatch : 'full'},
		{path:'showCustomerCardView',component:CustomerCardViewComponent},
		{path:'showCustomerListView',component:CustomerListViewComponent},
		{path:'showCustomerTableView',component:CustomerTableViewComponent},
	]
	},
	{path:'orders',component:OrderHomeComponent},
	{path:'about',component:AboutComponent},
	{path:'login',component:LoginComponent},
];

export const APP_ROUTES = RouterModule.forRoot(APP_ROUTES_List);
  

