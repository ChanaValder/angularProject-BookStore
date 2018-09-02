import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import{BookStoreService} from '././shared/services/book-store.service'

const appRoutes: Routes = [
  { path: 'bookStore/home', component:HomeComponent  },
  { path: 'bookStore/home/login', component:LoginComponent  },
<<<<<<< HEAD
=======
<<<<<<< HEAD
  { path: 'bookStore/home/register', component:RegisterComponent  },
=======
<<<<<<< HEAD
>>>>>>> be84bb7af686e55148c9115f61c2af8db6ab13ec
  { path: 'bookStore/home/login', component:RegisterComponent  },
  { path: 'bookStore/myAccount', component:AccountComponent  },
  { path: 'bookStore/products', component:ProductsComponent  },
  { path: 'bookStore/myCart', component:CartComponent  },
 

 
<<<<<<< HEAD
=======
=======
  { path: 'bookStore/home/register', component:RegisterComponent  }
>>>>>>> 2bb9c82e5b0f19dbaa1b674dcf5dcfe8e12d6df9
  { path: 'bookStore/home/productDetails/:id',component: ProductDetailsComponent },
>>>>>>> e6be54d6dfbdbac404c56472ba48c2e5f6c3e526
>>>>>>> be84bb7af686e55148c9115f61c2af8db6ab13ec
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ProductsComponent,
    HomeComponent,
    AccountComponent,
    CartComponent,
    ProductDetailsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,  RouterModule.forRoot( appRoutes )],
  providers: [BookStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
