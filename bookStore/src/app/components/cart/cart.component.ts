import { Component, OnInit } from '@angular/core';
import { BookStoreService } from '../../shared/services/book-store.service';
import { VolumeInfo } from '../../shared/models/volum-info.model';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
<<<<<<< HEAD
  myCartBook:VolumeInfo[];
=======
  myCartBook: VolumeInfo[];
>>>>>>> c98f15510831cf6f6c83352bf74cd1526fcda28d

  constructor(public bookService: BookStoreService) { }

  ngOnInit() {
    this.bookService.subject.subscribe(
      {
        next: (v: any) => {
          this.myCartBook = v;
        }
      })
<<<<<<< HEAD
    this.myCartBook= this.bookService.getMyCart();
=======
    this.myCartBook = this.bookService.getMyCart();



>>>>>>> c98f15510831cf6f6c83352bf74cd1526fcda28d
  }

}
