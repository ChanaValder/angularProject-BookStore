import { Component, OnInit } from '@angular/core';
import { Book } from '../../shared/models/book.model';
<<<<<<< HEAD
import { BookStoreService } from '../../shared/services/book-store.service';
=======
>>>>>>> ddc53ea9889dfdaddd9e3316f2438db3899322f2

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

<<<<<<< HEAD
  constructor(private bookStoreService:BookStoreService) { }
  bookList:Book[];
  ngOnInit() {
   this.bookStoreService.getBooks().subscribe(res=>{this.bookList=res},err=>{alert("error")});
=======
  constructor() { }
  bookList:Book[];
  ngOnInit() {
   ///this.bookList.
>>>>>>> ddc53ea9889dfdaddd9e3316f2438db3899322f2
  }

}
