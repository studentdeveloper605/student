import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-bubble',
  templateUrl: './message-bubble.component.html',
  styleUrls: ['./message-bubble.component.sass'],
})
export class MessageBubbleComponent implements OnInit {
  message: String = 'Sup, this is a sample message.';
  username: String = 'Harsh Chaturvedi';
  time: String = '11:30 AM';
  self: Boolean = false;
  constructor() {
    this.self = Math.random() > 0.5 ? true : false;
  }
  ngOnInit(): void {}
}
