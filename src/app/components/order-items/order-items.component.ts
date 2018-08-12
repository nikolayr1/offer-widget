import { Component } from '@angular/core';
import {OrderItemInterface} from "../../interfaces/order-item.interface";

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css'],
})
export class OrderItemsComponent {
  public items: OrderItemInterface[] = [{
    id: 1,
    number: 1,
    title: 'Some item'
  }];

  public addItem(): void  {
    this.items.push({
      id: 2,
      number: 2,
      title: 'Some new item'
    })
  }

  public removeItemByIndex(index: number): void {
    this.items.splice(index, 1);
  }
}
