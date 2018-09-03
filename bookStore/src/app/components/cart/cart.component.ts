import { Component, OnInit } from '@angular/core';
import{Book} from '../../shared/models/book.model';
import { BookStoreService } from '../../shared/services/book-store.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
<<<<<<< HEAD
  myCartBook:VolumeInfo[];

  constructor(public bookService:BookStoreService) { }

  ngOnInit() {

    this.bookService.subject.subscribe(
      {
        next: (v: any) => {
          this.myCartBook = v;
        }
      })
    this.myCartBook= this.bookService.getMyCart();
=======
  myCartBook:Book[];
  constructor(public bookService:BookStoreService) { }

  ngOnInit() {
    //this.myCartBook= this.bookService.getMyCart();
>>>>>>> 8ba738cecb063d45f0fd9246b6c0579ded4284a8



  }

}
