import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CustomerModule } from './customer-module/customer.module';
import { MainFooterComponent } from './footer/footer.component';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    MainFooterComponent
=======
    FooterComponent
>>>>>>> 5883852430b64278a6e8b3d013aaf3f0547dbdc7
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomerModule,
   
  ],
  exports: [
    FooterComponent,
  ],
<<<<<<< HEAD
  providers: [
    {provide : 'teamName', useValue : 'UI Hustlers'}
  ],
=======
  providers: [ ],
>>>>>>> 5883852430b64278a6e8b3d013aaf3f0547dbdc7
  bootstrap: [AppComponent]
})
export class AppModule { }
