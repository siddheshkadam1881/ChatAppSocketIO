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

   // getSignupData(path,model) {
   //      //console.log(model,path);
   //      this.urlpath= this.url.concat(path);
   //      return this.http.post(this.urlpath,model).map(res=>res.json());
   //      }





   on(eventName: any, callback: any) {
    if (this.socket) {
      this.socket.on(eventName, function(data: any){
        callback(data);
      });
    }
  };

  emit(eventName: any, data: any) {
    if (this.socket) {
      this.socket.emit(eventName, data);
    }
  };

  removeListener(eventName: any) {
    if (this.socket) {
      this.socket.removeListener(eventName);
    }

}
}
