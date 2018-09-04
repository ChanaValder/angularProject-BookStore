import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Book } from '../models/book.model';
import { VolumeInfo } from '../models/volum-info.model';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {
  
  subjectCart=new Subject();
  book:VolumeInfo;
  basicURL:string="http://localhost:3500/api";
  bookList:Book[];
  search:string="a";
  //check if use search and go to product detail and want to go back with search
  statusSearch: number;
  constructor(public httpClient:HttpClient) {
    
   }

   getBooks(searchKey?:string):Observable<Book[]>{
    if(!searchKey)
      searchKey="a";
    this.search=searchKey;
    return this.httpClient.get<Book[]>(`https://www.googleapis.com/books/v1/volumes?q=${searchKey}&maxResults=40&fields=items(saleInfo%2FlistPrice%2CvolumeInfo(authors%2Cdescription%2CimageLinks(smallThumbnail%2Cthumbnail)%2Clanguage%2CmainCategory%2CpageCount%2CpublishedDate%2Cpublisher%2Csubtitle%2Ctitle))`)
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
    bookList.splice(book['id'],1);
    localStorage.setItem("myCart", JSON.stringify(bookList));
    this.subjectCart.next(this.getMyCart())
   }

   addBookToMyCart(book:VolumeInfo)
   {
    let bookList = this.getMyCart();
    book['id']=bookList.length;
    bookList.push(book);
    localStorage.setItem("myCart", JSON.stringify(bookList));
    this.subjectCart.next(this.getMyCart())
   }

 
}
