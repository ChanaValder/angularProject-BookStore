import { Component, OnInit } from '@angular/core';
import{Book} from '../../shared/models/book.model';
import { BookStoreService } from '../../shared/services/book-store.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  myCartBook:Book[];
  constructor(public bookService:BookStoreService) { }

  ngOnInit() {
  this.bookService.getBooks().subscribe(data=>{
  this.myCartBook=data;
})

  }

}
