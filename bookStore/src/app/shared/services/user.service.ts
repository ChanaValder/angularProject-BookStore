import { Injectable } from '@angular/core';
import {User} from '../models/User.model'
import { Adress } from '../models/Adress.model';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { error } from '../../../../node_modules/protractor';

@Injectable({
  providedIn: 'root'
})
export class UserService {
adressStore:Adress
  user:User;
 
 
  basicURL:string="http://localhost:3500/api";

  constructor(public httpClient:HttpClient) {

    this.user=null;
    this.adressStore=new Adress("Hirsh",15,"Bnei-Brak");
   }

   login(user): void {
    this.httpClient.post(this.basicURL+"/login",user).subscribe(
        (res) => {
          localStorage.setItem("user", JSON.stringify(res));
           }
        
    )
  }

   registerUser(newUser:User): void {
    let url: string = this.basicURL + "/register";
    this.httpClient.post(url, newUser).subscribe(res => {
      localStorage.setItem('user', JSON.stringify(res));
    },
      err => {
        alert("error");
    });
  }

  checkUserLogin()
  {
     return JSON.parse(localStorage.getItem('user'))
  }

  logout()
  {
    localStorage.clear();
  }
 
}
