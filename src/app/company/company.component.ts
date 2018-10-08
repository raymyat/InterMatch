import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { WebsocketService } from '../websocket.service';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {



  constructor(private ws: WebsocketService) { }

  ngOnInit() {
 
  }
  onClick(res){
    this.ws.sendMessage(res);
    if (res){
      console.log("heyy yes")
    }else{
      console.log("heyy no")
    }
  }
}
