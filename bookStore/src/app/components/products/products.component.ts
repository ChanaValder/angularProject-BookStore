import { Component, OnInit } from '@angular/core';
import { Book } from '../../shared/models/book.model';
import { BookStoreService } from '../../shared/services/book-store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private bookStoreService:BookStoreService) { }
  bookList:Book[];
  ngOnInit() {
<<<<<<< HEAD
   this.bookStoreService.getBooks().subscribe(res=>{this.bookList=res},err=>{alert("error")});
  }
=======
   this.bookStoreService.getBooks().subscribe(res=>{console.log(res["items"][0]);  this.bookList=res["items"]},err=>{alert("error")});

>>>>>>> 9293cf645b71976e2afef8bd907265be73df23ea


}
}
