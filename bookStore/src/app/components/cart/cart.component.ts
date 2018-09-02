import { Component, OnInit } from '@angular/core';
import{Book} from '../../shared/models/book.model';
import { BookStoreService } from '../../shared/services/book-store.service';
import { VolumeInfo } from '../../shared/models/volum-info.model';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  myCartBook:VolumeInfo[];
  constructor(public bookService:BookStoreService) { }

  ngOnInit() {
    this.myCartBook= this.bookService.getMyCart();

  }

}
