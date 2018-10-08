import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';



@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {



  constructor() { }

  ngOnInit() {
 
  }
  onClick(res){
  
    if (res){
      console.log("heyy yes")
    }else{
      console.log("heyy no")
    }
  }
}
