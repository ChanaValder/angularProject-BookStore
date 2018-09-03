import { Injectable } from '@angular/core';
import{User} from '../models/User.model'
import { Adress } from '../models/Adress.model';
import { Observable, Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { error } from '../../../../node_modules/protractor';
import { Book } from '../models/book.model';
import { VolumeInfo } from '../models/volum-info.model';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

 subject=new Subject();
 
  basicURL:string="http://localhost:3500/api";
  bookList:Book[];
 
  constructor(public httpClient:HttpClient) {
    
   }
   getBooks(searchKey):Observable<Book[]>{

    return this.httpClient.get<Book[]>(this.basicURL+"/getList");
    // change the link according to the search key
   
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
   removeBookFromMyCart(book:VolumeInfo)
   {
    let bookList:any = this.getMyCart();
    //bookList.splice(bookList.findIndex(x=>x.booktitle==book),1);
    localStorage.setItem("taskList", JSON.stringify(bookList));;
   }

   addBookToMyCart(book:VolumeInfo)
   {
    let bookList = this.getMyCart();
    bookList.push(book);
    localStorage.setItem("myCart", JSON.stringify(bookList));
    this.subject.next(this.getMyCart().count)

   }
   
 
}
