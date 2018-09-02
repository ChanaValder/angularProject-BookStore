import { Component, OnInit } from '@angular/core';
import { Book } from '../../shared/models/book.model';
<<<<<<< HEAD
import { BookStoreService } from '../../shared/services/book-store.service';
=======
>>>>>>> 6b936f2d7b9e8c0e6d606dafba8ebbcd2cfed0a8

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

<<<<<<< HEAD
  constructor(private bookStoreService:BookStoreService) { }
=======
  constructor() { }
>>>>>>> 6b936f2d7b9e8c0e6d606dafba8ebbcd2cfed0a8
  bookList:Book[];
  ngOnInit() {
   this.bookList.
  }

}
