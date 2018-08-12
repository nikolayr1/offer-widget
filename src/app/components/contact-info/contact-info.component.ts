import {Component, Input} from '@angular/core';
import {ContactInfoInterface} from "../../interfaces/contact-info.interface";

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent {
  @Input() public contactInfo: ContactInfoInterface;
}
