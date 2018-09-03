import { Injectable } from '@angular/core';
import { User } from '../models/User.model'
import { Adress } from '../models/Adress.model';
import { Observable, Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { error } from '../../../../node_modules/protractor';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
  basicURL: string = "http://localhost:3500/api";
  subject = new Subject();
  constructor(public httpClient: HttpClient) {
    this.user = null;
  }

  login(user): void {
    this.httpClient.post(this.basicURL + "/login", user).subscribe(
      (res) => {
        localStorage.setItem("user", JSON.stringify(res));
        this.subject.next(this.checkUserLogin());
        this.user = res;
      }, err => {
        alert("eror to do login");
      }
    )
  }


  registerUser(newUser: User): void {
    let url: string = this.basicURL + "/register";
    this.httpClient.post(url, newUser).subscribe(res => {
      localStorage.setItem('user', JSON.stringify(res));
      this.subject.next(this.checkUserLogin());
    },
      err => {
        alert("error");
      });
  }

  checkUserLogin():User {
    return JSON.parse(localStorage.getItem('user'))
  }

  logout() {
    localStorage.clear();
    this.subject.next(this.checkUserLogin());
  }

}
