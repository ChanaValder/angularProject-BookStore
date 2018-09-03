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
>>>>>>> 01c98132ab98cf5c08fb3650244b03f61c246175

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
>>>>>>> 01c98132ab98cf5c08fb3650244b03f61c246175



  }

}
