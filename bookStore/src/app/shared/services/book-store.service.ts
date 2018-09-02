import { Injectable } from '@angular/core';
import{User} from '../models/User.model'
import { Adress } from '../models/Adress.model';
<<<<<<< HEAD
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { error } from '../../../../node_modules/protractor';
=======
import { HttpClient } from '@angular/common/http';

>>>>>>> bb5697a204588b3c8992ddc9ca07a5eaff948997

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {
adressStore:Adress
  user:User;
<<<<<<< HEAD
  basicUrlLogin="http://localhost:3500/api/login";
  constructor(private myHttpClient: HttpClient) {
=======
  basicURL:string="http://localhost:3500/api"
  constructor(public httpClient:HttpClient) {
>>>>>>> bb5697a204588b3c8992ddc9ca07a5eaff948997
    this.user=null;
    this.adressStore=new Adress("Hirsh",15,"Bnei-Brak");
   }

<<<<<<< HEAD
   login(user): void {
    this.myHttpClient.get(this.basicUrlLogin,user).subscribe(
        (res) => { alert("good")},err=>{alert("bad")}
        
    )
}
=======

   registerUser(newUser:User): void {
    let url: string = this.basicURL + "/register";
    this.httpClient.post(url, newUser).subscribe(res => {
      alert("good")

    },
      err => {
        alert("error");
    });
  }
>>>>>>> bb5697a204588b3c8992ddc9ca07a5eaff948997
 
}
