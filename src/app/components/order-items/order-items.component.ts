import {Component, Input} from '@angular/core';
import {OrderItemInterface} from "../../interfaces/order-item.interface";

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css'],
})
export class OrderItemsComponent {
  @Input() public items: OrderItemInterface[];

  public removeItemByIndex(index: number): void {
    this.items.splice(index, 1);
  }
}
