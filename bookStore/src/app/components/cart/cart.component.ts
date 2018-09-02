import { Component, OnInit } from '@angular/core';
import{Book} from '../../shared/models/book.model';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  myCartBook:Book[];
  constructor() { }

  ngOnInit() {
  }

}
