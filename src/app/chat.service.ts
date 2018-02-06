import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

@Injectable()
export class ChatService {
  private url = 'http://localhost:3000';
  private socket;
  public urlpath;
  constructor(private http: Http) {
  this.socket = io(this.url);
   }
   public sendMessage(data) {
       console.log(data);
       this.socket.emit('new-message', data);
   }
   public getMessages = () => {
       return Observable.create((observer) => {
           this.socket.on('new-message', (data) => {
            console.log(data);
               observer.next(data);
           });
       });
   }
   public getOnlineUsers = () => {
     return Observable.create((observer) => {
         this.socket.on('online-users', (data) => {
          console.log(data);
             observer.next(data);
         });
     });
   }
   public userLogin(data) {
     console.log(data);
     this.socket.emit('login', data);
   }

}
