import { Component,Input } from '@angular/core';

@Component({
  selector: 'customer',
    template: `
            <article>
                <header class="customer__name">{{value.name}}</header>
                  <section class="card__body">
                    <figure class="customer--profile">
                      <img src="{{value.profilePicture}}" title="{{value.name}}" alt="{{value.name}}">
                    </figure>
                    <ul class="customer--details">
                      <li class="customer--address--state">{{value.address.state}}</li>
                      <li class="customer--address--city">{{value.address.country}}</li>
                      <li class="customer--orders">View Orders</li>
                    </ul>
                  </section>          
            </article>                  
        `,
  styleUrls: ['../app.component.scss']
})
export class CustomerComponent {
  title = 'Customer';

  @Input()
  value;

  } 


