import { Component, Inject } from '@angular/core';

@Component({
    selector: 'footer-component',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class MainFooterComponent {

    constructor(@Inject('teamName') private team: string) {
        console.log('Inside footer constructor');
    }

}
