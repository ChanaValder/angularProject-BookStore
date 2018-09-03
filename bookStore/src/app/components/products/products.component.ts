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
    this.getBook(""); 
}
getBook(keySearch:string)
{
  this.bookStoreService.getBooks(keySearch).subscribe(res=>{ this.bookList=res["items"]; },err=>{alert("error")});

}
search(keySearch)
{
this.getBook(keySearch);

}
}
