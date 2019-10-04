import { Component, Inject } from '@angular/core';
import { CustomerApiService } from '../services/customer-api.service';
import { Customer } from '../models/customer';


@Component({
    selector: 'customer-list',
    //customer list template import 
    templateUrl: './customer-list.component.html',
    //customer list template import
    styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent {
    title = 'Customers List';
    customers: Customer[];

    constructor(private customerApiService: CustomerApiService, @Inject('teamName') private team: string) {
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


