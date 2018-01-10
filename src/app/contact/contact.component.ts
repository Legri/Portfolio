
import { Component, OnInit } from '@angular/core';
import { ContactService, IMessage } from '../service/contact.service';
import {FormControl, FormGroup, Validators} from "@angular/forms";



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 


  title = 'Angular PHP Email Example!';
  message: IMessage = {};
  isValid=true;
  contactForm : FormGroup;
  constructor(private appService: ContactService) {
 
  }
 
  sendEmail(message: IMessage) {
    this.appService.sendEmail(message).subscribe(res => {
      //console.log('AppComponent Success', res);
      this.isValid=false;
    }, error => {
     // console.log('AppComponent Error', error);
    })
  }

  ngOnInit() {
  }

}
