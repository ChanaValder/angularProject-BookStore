import { Component, OnInit, Input } from '@angular/core';
import { BookStoreService } from '../../shared/services/book-store.service';
import { VolumeInfo } from '../../shared/models/volum-info.model';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnInit {
@Input()  book:VolumeInfo;
  constructor(public bookService:BookStoreService) { }

  ngOnInit() {
    console.log(this.book);
  }

  removeBookMyCart()
  {
//this.bookService.removeBookFromMyCart(this.book)
  }

}
