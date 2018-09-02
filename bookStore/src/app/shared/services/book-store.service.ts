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

 
 
  basicURL:string="http://localhost:3500/api";

  constructor(public httpClient:HttpClient) {

   
   }

   
 
}
