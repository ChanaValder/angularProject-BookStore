import { Injectable } from '@angular/core';
import{User} from '../models/User.model'
import { Adress } from '../models/Adress.model';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {
adressStore:Adress
  user:User;
  constructor() {
    this.user=null;
    this.adressStore=new Adress("Hirsh",15,"Bnei-Brak");
   }
 
}
