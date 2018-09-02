import { Component, OnInit } from '@angular/core';
import { Router, Routes, ActivatedRoute } from '@angular/router';
import { BookStoreService } from '../../shared/services/book-store.service';
import { User } from '../../shared/models/User.model';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
book:string;
user:User;
  constructor( private route: ActivatedRoute,public bookService:BookStoreService,
    public userService:UserService,public router:Router) { 

    this.route.params.subscribe( params =>{ console.log(params['booktitle']);
     this.book=params['booktitle']} );
    
  }

  ngOnInit() {
    this.user=this.userService.checkUserLogin();
  }

  addToMyCart()
  {
    //this.bookService.addBookToMyCart(this.book)
  }


backProductsPage()
{
  this.router.navigate(['/products' ]);
}

}
