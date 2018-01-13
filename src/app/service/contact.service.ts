import { Injectable } from '@angular/core';
import { Http, RequestOptions,Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Resolve } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
 
export interface IMessage {
  name?: string,
  email?: string,
  message?: string
}
 
@Injectable()
export class ContactService {
  private emailUrl = 'http://api.kusmirchuk.kl.com.ua/api/email.php';
 
  constructor(private http: Http) {
 
  }
 
  sendEmail(message: IMessage): Observable<IMessage> | any {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.emailUrl, message,options)
      .map(response => {
        //console.log('Sending email was successfull', response);
        return response;
      })
      .catch(error => {
      //console.log('Sending email got error', error);
        return Observable.throw(error)
      })
  }
}