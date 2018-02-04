import { BrowserModule } from '@angular/platform-browser';
import { ChatService } from './chat.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {MatToolbarModule} from '@angular/material/toolbar';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
   MatToolbarModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
