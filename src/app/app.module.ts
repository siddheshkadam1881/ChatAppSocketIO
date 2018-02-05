
import { ChatService } from './chat.service';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { AppComponent } from './app.component';
//import { SignupComponent } from './signup/signup.component';
import { MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import {HttpClientModule} from '@angular/common/http';
import { Http } from '@angular/http'
//import { AsyncLocalStorage } from 'angular-async-local-storage';
// const routes: Routes = [
//
@NgModule({
  declarations: [
    AppComponent,
    //SignupComponent,
  //  SigninComponent
  ],
  imports: [
    //AsyncLocalStorage,
   MatToolbarModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatMenuModule,
    HttpClientModule,

  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
