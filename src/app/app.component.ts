import {Component, EventEmitter, Input, Output} from '@angular/core';
import {OrderItemInterface} from "./interfaces/order-item.interface";
import {ITEMS_MOCK} from "./mock/items.mock";
import {ContactInfoInterface} from "./interfaces/contact-info.interface";

@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() orderId: string;
  @Output() submitEvent = new EventEmitter();
  public items: OrderItemInterface[] = ITEMS_MOCK;
  public contactInfo: ContactInfoInterface;

  constructor() {
    this.contactInfo = {
      name: '',
      surname: '',
      phone: ''
    }
  }

  public submit(): void {
    this.submitEvent.emit({
      orderId: this.orderId,
      items: this.items,
      contactInfo: this.contactInfo
    });
  }
}
