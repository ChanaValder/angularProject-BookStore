import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnInit {
@Input()  book:string;
  constructor() { }

  ngOnInit() {
    console.log(this.book);
  }

}
