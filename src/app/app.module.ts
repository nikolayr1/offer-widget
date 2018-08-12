import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { OrderItemsComponent } from './components/order-items/order-items.component';
import { OrderItemComponent } from './components/order-item/order-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactInfoComponent,
    OrderItemsComponent,
    OrderItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
