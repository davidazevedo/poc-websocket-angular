import { NgModule } from '@angular/core';
import { ConectorWebsocketComponent } from '../conector-websocket/conector-websocket.component';
const Net = require('net');

@NgModule({
  providers: [
    ConectorWebsocketComponent
  ]
})
export class AppComponentBase {

 }
