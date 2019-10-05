import { Component } from '@angular/core';

@Component({
    selector: 'customer-header',
    templateUrl: './customer-header.component.html',
    styleUrls: ['./customer-header.component.scss']
})
export class CustomerHeaderComponent {
    miniatureText: string = 'Customers';
    cardView: string = 'Card View';
    listView: string = 'List View';
    tableView: string = 'Table View';
    newCustomer: string = 'New Customer';
    filter: string = 'Filter'

    constructor() {
        console.log("inside customer header constructor");
    }
}


