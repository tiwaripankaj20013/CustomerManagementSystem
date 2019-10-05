<<<<<<< HEAD
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
=======
import { Component } from '@angular/core';

@Component({
    selector: 'footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
    
    // constructor() {
    //     console.log("inside customer header constructor");
    // }
}
>>>>>>> 5883852430b64278a6e8b3d013aaf3f0547dbdc7
