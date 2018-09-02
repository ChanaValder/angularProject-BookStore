import { Component, OnInit } from '@angular/core';
import { Router, Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
book:string;
  constructor( private route: ActivatedRoute) { 

    this.route.params.subscribe( params =>{ console.log(params['booktitle']);
  this.book=params['booktitle']} );
    
  }

  ngOnInit() {
  }

}
