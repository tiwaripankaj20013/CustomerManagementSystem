import { Component } from '@angular/core';
import { CustomerApiService } from '../services/customer-api.service';
import { Customer } from '../models/customer';

@Component({
    selector: 'customer-table',
    templateUrl: './customer-table.component.html',
    styleUrls: ['./customer-table.component.scss']
})
<<<<<<< HEAD
export class CustomerTableComponent {
=======
export class CustomerTableViewComponent {
    title = 'Customers Table';
>>>>>>> 5883852430b64278a6e8b3d013aaf3f0547dbdc7
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

