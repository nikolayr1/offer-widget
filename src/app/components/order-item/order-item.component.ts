import {Component, EventEmitter, Input, Output} from '@angular/core';
import {OrderItemInterface} from "../../interfaces/order-item.interface";

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.sass']
})
export class OrderItemComponent {
  @Input() public item: OrderItemInterface;
  @Output() public removeEvent = new EventEmitter<void>();

  public removeItem(): void {
    this.removeEvent.emit();
  }

  public addOne(): void {
    this.item.number++;
  }

  public removeOne(): void {
    this.item.number--;
    if (this.item.number === 0) {
      this.removeItem();
    }
  }
}


