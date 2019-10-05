import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CustomerModule } from './customer-module/customer.module';
import { MainFooterComponent } from './footer/footer.component';
import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent,
    MainFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomerModule
  ],
  providers: [
    {provide : 'teamName', useValue : 'UI Hustlers'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
