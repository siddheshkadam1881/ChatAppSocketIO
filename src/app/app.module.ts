import { BrowserModule } from '@angular/platform-browser';
import { ChatService } from './chat.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {MatToolbarModule} from '@angular/material/toolbar';
//import { AsyncLocalStorage } from 'angular-async-local-storage';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //AsyncLocalStorage,
   MatToolbarModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
