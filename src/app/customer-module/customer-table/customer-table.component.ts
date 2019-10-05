import { Component } from '@angular/core';
import { CustomerApiService } from '../services/customer-api.service';
import { Customer } from '../models/customer';

@Component({
    selector: 'customer-table',
    //customer table template import 
    templateUrl: './customer-table.component.html',
    //customer table style import 
    styleUrls: ['./customer-table.component.scss']
})
export class CustomerTableViewComponent {
    title = 'Customers Table';
    customers: Customer[];

    constructor(private customerApiService: CustomerApiService) {
        console.log('Inside customer card component constructor');
    }

    ngOnInit() {
        //Ajax call to fetch data from server
        this.customerApiService.getCustomerApi()
            .subscribe((res) => {
                this.customers = res;
            })
    }
}

