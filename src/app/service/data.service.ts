import {Injectable} from '@angular/core';
import {Http} from '@angular/http';









@Injectable()
export class DataService {
  
  constructor(private http: Http) {  }


public getJSON() {
    return this.http.get('assets/data/data.json')
        
}


}
