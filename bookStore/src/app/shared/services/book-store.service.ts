import { Injectable } from '@angular/core';
import{User} from '../models/User.model'
import { Adress } from '../models/Adress.model';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { error } from '../../../../node_modules/protractor';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

 
 
  basicURL:string="http://localhost:3500/api";
  bookList:Book[];
 
  constructor(public httpClient:HttpClient) {
    
   }
   getBooks():Observable<Book[]>{

    return this.httpClient.get<Book[]>(this.basicURL+"/getList");
   }


   
   
   getMyCart()
   {
    let listBook = localStorage.getItem("myCart");
    return (listBook) ? JSON.parse(listBook) : [];
   }

   clearMyCart()
   {
    localStorage.clear();
   }
   removeBookFromMyCart(book:Book)
   {
    let bookList = this.getMyCart();
    bookList.push(book);
   }

   addBookToMyCart(book:Book)
   {
    let bookList = this.getMyCart();
    bookList.push(book);
    localStorage.setItem("myCart", JSON.stringify(bookList));
   }
   
 
}
