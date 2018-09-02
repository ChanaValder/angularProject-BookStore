import { Component, OnInit } from '@angular/core';
import { Adress } from '../../shared/models/Adress.model';
import { BookStoreService } from '../../shared/services/book-store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public bookStoreService:BookStoreService) { }
adressStore:Adress
  ngOnInit() {
    this.adressStore=this.bookStoreService.adressStore;
  }

}
