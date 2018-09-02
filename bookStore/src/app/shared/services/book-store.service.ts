import { Injectable } from '@angular/core';
import{User} from '../models/User.model'
import { Adress } from '../models/Adress.model';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { error } from '../../../../node_modules/protractor';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {
adressStore:Adress
  user:User;
  basicUrlLogin="http://localhost:3500/api/login";
  constructor(private myHttpClient: HttpClient) {
    this.user=null;
    this.adressStore=new Adress("Hirsh",15,"Bnei-Brak");
   }

   login(user): void {
    this.myHttpClient.get(this.basicUrlLogin,user).subscribe(
        (res) => { alert("good")},err=>{alert("bad")}
        
    )
}
 
}
