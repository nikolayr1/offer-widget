import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'start title';
  public changeTitleText(newTitleText: string): void {
    this.title = newTitleText;
  }
}
