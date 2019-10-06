
import { Component, Inject } from '@angular/core';

@Component({
    selector: 'order-component',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.scss']
})
export class OrderComponent {

    constructor(@Inject('teamName') private team: string) {
        console.log('Inside footer constructor');
    }

}

