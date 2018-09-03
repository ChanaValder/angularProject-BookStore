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
<<<<<<< HEAD
    //this.myCartBook= this.bookService.getMyCart();
=======
    this.myCartBook= this.bookService.getMyCart();
>>>>>>> f58fcb1fc1ee0ab80225c29b8fe4e645d97228b6

  }

}
