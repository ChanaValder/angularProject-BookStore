import { Component, OnInit } from '@angular/core';
import { Book } from '../../shared/models/book.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }
  bookList:Book[];
  ngOnInit() {
   this.bookList
  }

}
