import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  date:number;
  currentDate:string;
  footerMessage:string
  constructor() {
    this.date=new Date().getFullYear();
    this.footerMessage="all rights reserved Chaya and Chany";
   }

 

  ngOnInit() {
  }

}
