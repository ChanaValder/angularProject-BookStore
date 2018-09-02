import { Component, OnInit, Input } from '@angular/core';
import { VolumeInfo } from '../shared/models/volum-info.model';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.css']
})
export class ProductPreviewComponent implements OnInit {

  constructor() { }
@Input()
  book:VolumeInfo;  
  ngOnInit() {
    console.log(this.book["volumeInfo"]["title"])
  }
  bookDetails()
  {

  }

}
