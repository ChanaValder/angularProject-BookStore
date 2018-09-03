import { Component, OnInit } from '@angular/core';
import { Book } from '../../shared/models/book.model';
import { BookStoreService } from '../../shared/services/book-store.service';
import { VolumeInfo } from '../../shared/models/volum-info.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private bookStoreService: BookStoreService) { }
  bookList: Book[];
  ngOnInit() {
    this.getBook("a");
  }
  getBook(keySearch: string) {
    this.bookStoreService.getBooks(keySearch).subscribe(res => { this.bookList = res["items"]; }, err => { });

  }
  search(keySearch) {
    this.getBook(keySearch);
    

  }
}
