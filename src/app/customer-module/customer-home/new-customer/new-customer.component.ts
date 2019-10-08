import { Component } from '@angular/core';
import { Newcustomer } from '../models/newCustomer';
import { from } from 'rxjs';

@Component({
    selector: 'new-customer',
    templateUrl: './new-customer.component.html',
    styleUrls: ['./new-customer.component.scss']
})
export class NewCustomerComponent {
    customerIcon='../../../assets/images';
    constructor() {
        console.log("inside customer form constructor");
    }
}


