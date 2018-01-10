import { Component, OnInit} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { DataService } from "../service/data.service";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
  
})
export class HomeComponent implements OnInit {
  people: any=[];

  
  constructor(private httpService: DataService) {
    
   }
  ngOnInit() {
    this.people=this.httpService.getJSON().subscribe(res => {
      this.people = res.json();
     // console.log( this.people);
  });
 
}

}