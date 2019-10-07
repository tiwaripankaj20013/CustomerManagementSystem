import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CustomerModule } from './customer-module/customer.module';
import { OrderModule } from './order-module/order-module';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component' 
import { FooterComponent } from './footer/footer.component';
import { AppComponent } from './app.component';
import {APP_ROUTES} from './app-routing.configure';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrderModule,
    CustomerModule,
    APP_ROUTES,
    
  ],
  providers: [
    { provide : 'teamName', useValue : 'UI Hustlers' }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
