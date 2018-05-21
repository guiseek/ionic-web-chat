import { Component, Input } from '@angular/core';

@Component({
  selector: 'room-messages',
  templateUrl: 'room-messages.html'
})
export class RoomMessagesComponent {
  @Input() messages: any[];
  constructor() { }
}
