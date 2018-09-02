import { Component, OnInit } from '@angular/core';
import { Book } from '../../shared/models/book.model';
import { BookStoreService } from '../../shared/services/book-store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private bookStoreService:BookStoreService) { }
  bookList:Book[];
  ngOnInit() {
   this.bookStoreService.getBooks().subscribe(res=>{this.bookList=res},err=>{alert("error")});
  }

}
