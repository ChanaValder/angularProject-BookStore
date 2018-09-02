import { Component, OnInit } from '@angular/core';
import{User} from '../../shared/models/User.model'
import{BookStoreService} from '../../shared/services/book-store.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user:User;
  constructor(private bookStoreService:BookStoreService) {
    this.user=this.bookStoreService.user;
   }

  ngOnInit() {
  
  }

}
