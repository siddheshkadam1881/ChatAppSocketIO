import { Component } from '@angular/core';
import { ChatService } from './chat.service';
import * as io from 'socket.io-client';
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
  users: Array<any>;
  model:any={};
  set
  //selfAuthored: Boolean = false;

  constructor(private chatService: ChatService) { let set = new Set()  }

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
       console.log(this.set);
      });



    //   this.users = new Array();
    //
    //   this.chatService.on('get-users', (msg: any) => {
    //   this.users.push(msg);
    //   console.log(msg);
    //   console.log(this.users);
    // });


 //
 //  sendUser() {
 //   const user = {
 //     user: this.Username
 //   };
 //   this.chatService.emit('set-user', user);
 //   this.Username = '';
 // }

}
}
