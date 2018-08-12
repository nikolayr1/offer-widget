import {Component, EventEmitter, Input, Output} from '@angular/core';
import {OrderItemInterface} from "../../interfaces/order-item.interface";

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.sass']
})
export class OrderItemComponent {
  @Input() item: OrderItemInterface;
  @Output() removeEvent = new EventEmitter<void>();

  public removeItem(): void {
    this.removeEvent.emit();
  }
}


