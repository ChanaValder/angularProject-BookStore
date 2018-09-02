import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/User.model'
import { BookStoreService } from '../../shared/services/book-store.service';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: User;
  countMyCard:number=0;
  constructor(private userService: UserService,public bookService:BookStoreService) {
    this.user=this.userService.checkUserLogin();
    this.userService.subject.subscribe(
      {
        next: (v: any) => {
          this.user = v;
        }
      })
      
      this.bookService.subject.subscribe(
        {
          next: (v: any) => {
            this.countMyCard = v;
          }
        })
  }
  // this.user.imgUrl="default.png";


  ngOnInit() {

  }

}
