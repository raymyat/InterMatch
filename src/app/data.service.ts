import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService{

 

 // Our constructor calls our wsService connect method
 constructor(private http: HttpClient) {
   
  }

 // Our simplified interface for sending
 // messages back to our socket.io server



 getUsers(){
   // these is where you connect to the database
  return this.http.get('https://jsonplaceholder.typicode.com/users')
 }
 getRespond(message){
   // these is where you connect to the database
  console.log("Application is ",message);
 }
}
