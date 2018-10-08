import { Injectable } from '@angular/core';
import { Socket } from 'ng6-socket-io';
import { map } from 'rxjs/operators';

@Injectable()({
  providedIn: 'root'
})
export class WebsocketService {
  constructor(private socket: Socket) { }
  sendMessage(msg: string) {
    this.socket.emit("message", msg);
  }
  getMessage() {
    return this.socket
        .fromEvent("message")
        .pipe(map( data => data));
  }
}
