import { Component, OnInit, Input } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { VolumeInfo } from '../../shared/models/volum-info.model';
import { BookStoreService } from '../../shared/services/book-store.service';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.css']
})
export class ProductPreviewComponent implements OnInit {

  constructor( private route: ActivatedRoute,
    private router: Router,
  public bookService:BookStoreService) { }
@Input()
  book:VolumeInfo;  
  ngOnInit() {
    
  }
  bookDetails()
  {
    this.bookService.book=this.book;
    this.router.navigate(['/productsDetails']);
  }

}
