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
<<<<<<< HEAD
    this.myCartBook= this.bookService.getMyCart();
=======
    //this.myCartBook= this.bookService.getMyCart();
>>>>>>> a8b78c0a1e9d7486c8b118af7050b91e462670f0

  }

}
