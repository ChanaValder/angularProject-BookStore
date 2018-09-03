import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/models/User.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user:User;
  constructor(public userService:UserService) {
    this.user=this.userService.checkUserLogin();
    console.log(this.user);
    this.userService.subject.subscribe(
      {
        next: (v: any) => {
          this.user = v;
        }
      })
   }

  ngOnInit() {
   
  }

  logout()
  {
    this.userService.logout();
  }

}
