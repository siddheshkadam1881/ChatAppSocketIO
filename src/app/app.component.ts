import { Component } from '@angular/core';
import { ChatService } from './chat.service';
import * as io from 'socket.io-client';
//import { AsyncLocalStorageModule } from 'angular-async-local-storage';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   messages=[];
   onlineuser=[];
   data: string;
   Username: String;
  //users: Array<any>;
  model:any={};
  showHide:Boolean;
  //selfAuthored: Boolean = false;

  constructor(private chatService: ChatService) { this.showHide = false; }

  sendData() {
     this.chatService.sendMessage(this.model);
     //this.data = '';
   }
   ngOnInit() {
     
    this.chatService
      .getMessages()
      .subscribe((data) => {
       this.messages.push(data);
       //console.log(data.username);
       this.onlineuser.push(data.username);

      });
}
changeShowStatus(){
this.showHide = !this.showHide;
}

}
