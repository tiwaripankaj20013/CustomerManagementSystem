import { Component,Input } from '@angular/core';

@Component({
  selector: 'customer',
    template: `
            <article class="customer">
                <header class="customer__name bg-primary">{{value.name}}</header>
                  <section class="card__body">
                    <figure class="customer__profile">
                      <img src="{{value.profilePicture}}" title="{{value.name}}" alt="{{value.name}}">
                    </figure>
                    <ul class="customer__details">
                      <li class="customer__details--state">{{value.address.state}}</li>
                      <li class="customer__details--city">{{value.address.country}}</li>
                      <li class="customer__details--orders">View Orders</li>
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


