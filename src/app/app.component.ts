import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'angular-chat-app';
  constructor() {
    window.scrollTo(0, document.body.scrollHeight);
  }
}
