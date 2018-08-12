import { Component } from '@angular/core';
import {OrderItemInterface} from "./interfaces/order-item.interface";
import {ITEMS_MOCK} from "./mock/items.mock";
import {ContactInfoInterface} from "./interfaces/contact-info.interface";

@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public items: OrderItemInterface[] = ITEMS_MOCK;
  public contactInfo: ContactInfoInterface;

  constructor() {
    this.contactInfo = {
      name: 'Ivan',
      surname: 'S',
      phone: '2323423'
    }
  }

  public submit(): void {
    console.log(this.contactInfo, this.items)
  }
}
