import { Injectable } from '@angular/core';
import{User} from '../models/User.model'

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  user:User;
  constructor() {
    this.user=null;
   }
 
}
