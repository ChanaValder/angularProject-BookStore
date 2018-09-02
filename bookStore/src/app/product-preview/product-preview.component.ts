import { Component, OnInit, Input } from '@angular/core';
import { VolumeInfo } from '../shared/models/volum-info.model';
import { Router, ActivatedRoute } from '@angular/router';

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
    console.log(this.book.title)
  }
  bookDetails(booktitle:string)
  {
    this.router.navigate(['/productsDetails',booktitle ]);
  }

}
