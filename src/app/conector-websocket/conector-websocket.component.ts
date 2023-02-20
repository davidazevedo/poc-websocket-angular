import {   Component,
  Injector,
  OnInit,
  Output,
  EventEmitter } from '@angular/core';
import { PushDto } from '../shared/PushDto';
import { HttpClient } from '@angular/common/http';
import { WebSocketConnector } from '../shared/websocket-connector';

@Component({
  selector: 'app-conector-websocket',
  templateUrl: './conector-websocket.component.html',
  styleUrls: ['./conector-websocket.component.css']
})
export class ConectorWebsocketComponent  { 
  constructor(private http: HttpClient) {
  }

      items: any[] = [];
      push: PushDto = new PushDto();
      private webSocketConnector: WebSocketConnector;

      connect(): void {
        this.webSocketConnector = new WebSocketConnector(
          this.push.IP,
          this.push.Message,
          this.onMessage.bind(this)
        );
      }
     
      onStart(message: any): void {
        this.items.push(message.body);
      }

      onStop(message: any): void {
        this.items.push(message.body);
      }

      onMessage(message: any): void {
        this.items.push(message.body);
      }  
}
