import { Component, OnInit } from '@angular/core';
import { Router, Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor( private route: ActivatedRoute) { 

    let titlebook = this.route.snapshot.paramMap.get('booktitle');
    
  }

  ngOnInit() {
  }

}
