import { Component, OnInit, Input } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { VolumeInfo } from '../../shared/models/volum-info.model';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.css']
})
export class ProductPreviewComponent implements OnInit {

  constructor( private route: ActivatedRoute,
    private router: Router) { }
@Input()
  book:VolumeInfo;  
  ngOnInit() {
    console.log(this.book)
  }
  bookDetails()
  {
    this.router.navigate(['/productsDetails',this.book.title ]);
  }

}
