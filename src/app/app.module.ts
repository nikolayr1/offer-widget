import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { OrderItemsComponent } from './components/order-items/order-items.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactInfoComponent,
    OrderItemsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
