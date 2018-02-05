import { Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {FormBuilder, FormGroup} from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ChatService } from '../chat.service';
import { HttpClientModule } from '@angular/common/http';
import { Http ,HttpModule} from '@angular/http'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent{
 responseStatus:Object= [];
 status:boolean ;
  constructor(private commonService:ChatService){}
  //password validation
  hide = true;
  //declare object of FormControl for email validator
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
   return this.email.hasError('required') ? 'You must enter a value' :
       this.email.hasError('email') ? 'Not a valid email' :
           '';
  }


      // signInUser(data) {
      //   console.log(data);
      //
      //          // console.log("submit Post click happend " + this.model.name)
      //           this.commonService.getSignupData('signin',data).subscribe(
      //           data => console.log(this.responseStatus = data),
      //           err => console.log(err),
      //           () => console.log('Request Completed')
      //    );
      //  }
}
