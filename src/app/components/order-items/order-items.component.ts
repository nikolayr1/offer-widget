import { Component } from '@angular/core';
import {OrderItemInterface} from "../../interfaces/order-item.interface";
import {ITEMS_MOCK} from "../../mock/items.mock";

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css'],
})
export class OrderItemsComponent {
  public items: OrderItemInterface[] = ITEMS_MOCK;

  public removeItemByIndex(index: number): void {
    this.items.splice(index, 1);
  }
}
