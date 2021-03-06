import { Component, OnInit} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { DataService } from "../service/data.service";
import { Router } from "@angular/router";




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
  
})
export class HomeComponent implements OnInit {
  people: any=[];
  isValid=false;
  isValidContact=false;
  
  constructor(private httpService: DataService,private router: Router) {
    
   }
  ngOnInit() {
    this.people=this.httpService.getJSON().subscribe(res => {
      this.people = res.json();
     // console.log( this.people);
  });
 
}
clicked(){
  this.isValid=! this.isValid;
}

btnClick(){
  //this.router.navigateByUrl('/contact');
  this.isValidContact=!this.isValidContact;
}
}