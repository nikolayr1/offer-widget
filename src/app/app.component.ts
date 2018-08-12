import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OrderItemInterface} from "./interfaces/order-item.interface";
import {ITEMS_MOCK} from "./mock/items.mock";
import {ContactInfoInterface} from "./interfaces/contact-info.interface";
import {RealTransportService} from "./services/transport/real-transport.service";
import {HttpClient} from "@angular/common/http";
import {FakeTransportService} from "./services/transport/fake-transport.service";
import {MapperService} from "./services/mapper.service";
import {map} from "rxjs/operators";
import {PostInterface} from "./interfaces/post.interface";
import {HttpModule} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Input() orderId?: string;
  @Input() orderEndpoint?: string;
  @Output() submitEvent = new EventEmitter();
  public items: OrderItemInterface[] = ITEMS_MOCK;
  public contactInfo: ContactInfoInterface;

  constructor (
    private http: HttpClient,
    private mapper: MapperService,
  ) {
    this.contactInfo = {
      name: '',
      surname: '',
      phone: ''
    }
  }

  ngOnInit(): void {
    this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .pipe(map(postItems => postItems.map(item => this.mapper.convertPostToOrderItem(item))))
      .subscribe(data => { this.items = data});
  }

  public submit(): void {
    this.submitEvent.emit({
      orderId: this.orderId,
      items: this.items,
      contactInfo: this.contactInfo
    });
  }
}
