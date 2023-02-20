const Net = require('net');


export class WebSocketConnector {
  public host: string
  public port: number = 3000;
  public stompClient: any;
  clientSocket = new Net.Socket();

  constructor(private _host: string, port: number, private topic: string) {
    this.host = _host;
    this.port = port;
  }

  public connect() {
    this.clientSocket.connect({ port: this.port, host: this.host }, function() {
      console.log('TCP connection established with the server.');
    })
  }

  socketCallbak = (chunk: { toString: () => any; }) => {
    console.log(`Data received from the server: ${chunk.toString()}.`);
    this.clientSocket.end();
  }

  public onData(error: string): void {
    this.clientSocket.on('data', this.socketCallbak);
  }

  public sendMessage(Message: string): void {
    this.clientSocket.client.write(Message);
  }
}
