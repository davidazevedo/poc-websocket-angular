import { Component, OnInit } from '@angular/core';
import { PushDto } from '../shared/PushDto';
import { WebSocketConnector } from '../shared/websocket-connector';



@Component({
  selector: 'app-conector-websocket',
  templateUrl: './conector-websocket.component.html',
  styleUrls: ['./conector-websocket.component.css']
})
export class ConectorWebsocketComponent  {
  items: any[] = [];
  push: PushDto = new PushDto();
  private webSocketConnector!: WebSocketConnector;
  isConnect: boolean = false;

  connect(): void {
    this.webSocketConnector = new WebSocketConnector(
      this.push.Ip,
      this.push.Port,
      this.push.Topic,
    );

    this.webSocketConnector.connect();
    this.isConnect = true
  }

  onSendMessage(message: any): void {

  }

  disconnect(): void {
    this.webSocketConnector.stompClient.disconnect(function () {
    })
    this.isConnect = false
  }

  onMessage(): void {
    this.items.push(this.push.Message);
    this.webSocketConnector.sendMessage(this.push.Message)
  }
}
