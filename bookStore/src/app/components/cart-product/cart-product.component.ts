import { Component, OnInit, Input } from '@angular/core';
import { BookStoreService } from '../../shared/services/book-store.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnInit {
@Input()  book:string;
  constructor(public bookService:BookStoreService) { }

  ngOnInit() {
    console.log(this.book);
  }

  removeBookMyCart()
  {
this.bookService.removeBookFromMyCart(this.book)
  }

}
