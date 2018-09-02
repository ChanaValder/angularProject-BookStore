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
  this.bookService.getMyCart().subscribe(data=>{
  this.myCartBook=data;
})
=======
    this.myCartBook= this.bookService.getMyCart();
>>>>>>> 0168d91d5815b919fcde0c2b152cd053dd889a2f

  }

}
