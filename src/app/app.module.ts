import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CustomerModule } from './customer-module/customer.module';
import { FooterComponent } from './footer/footer.component';
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomerModule,
   
  ],
  exports:[HeaderComponent],
  providers: [
    { provide : 'teamName', useValue : 'UI Hustlers' }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
