import { Component } from '@angular/core';
import { CustomerApiService } from '../services/customer-api.service';
import { Customer } from '../models/customer';


@Component({
    selector: 'customer-card',
    templateUrl: './customer-card.component.html',
})
<<<<<<< HEAD
export class CustomerCardComponent {
=======
export class CustomerCardViewComponent {
    title = 'Customers Card';
>>>>>>> 5883852430b64278a6e8b3d013aaf3f0547dbdc7
    customers: Customer[];

    constructor(private customerApiService: CustomerApiService) {
        console.log('Inside customer card component constructor');

    }

    ngOnInit() {
        // get data from customer api service
        this.customerApiService.getCustomerApi()
        .subscribe((res) => {
            this.customers = res;
        })
    }
}


