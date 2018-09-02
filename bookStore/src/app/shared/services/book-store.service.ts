import { Injectable } from '@angular/core';
import{User} from '../models/User.model'
import { Adress } from '../models/Adress.model';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { error } from '../../../../node_modules/protractor';
<<<<<<< HEAD
=======


>>>>>>> 524db0a81af8596ee96c987f005c698391265c91

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {
adressStore:Adress
  user:User;
<<<<<<< HEAD
 
 
  basicURL:string="http://localhost:3500/api";

=======

  basicURL="http://localhost:3500/api"
>>>>>>> 524db0a81af8596ee96c987f005c698391265c91
  constructor(public httpClient:HttpClient) {
    this.user=null;
    this.adressStore=new Adress("Hirsh",15,"Bnei-Brak");
   }

   login(user): void {
    this.httpClient.get(this.basicURL+"/login",user).subscribe(
        (res) => { alert("good")},err=>{alert("bad")}
        
    )
<<<<<<< HEAD
  }
=======
}
>>>>>>> 524db0a81af8596ee96c987f005c698391265c91

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
