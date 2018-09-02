import { Injectable } from '@angular/core';
import{User} from '../models/User.model'
import { Adress } from '../models/Adress.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BookStoreService {
adressStore:Adress
  user:User;
  basicURL:string="http://localhost:3500/api"
  constructor(public httpClient:HttpClient) {
    this.user=null;
    this.adressStore=new Adress("Hirsh",15,"Bnei-Brak");
   }


   registerUser(newUser:User): void {
    let url: string = this.basicURL + "/register";
    this.httpClient.post(url, newUser).subscribe(res => {
      alert("good")

    },
      err => {
        alert("error");
    });
  }
 
}
