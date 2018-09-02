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
import { BookStoreService } from '././shared/services/book-store.service'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { ProductPreviewComponent } from './components/product-preview/product-preview.component';
import { UserService } from './shared/services/user.service';
import { CartProductComponent } from '../app/components/cart-product/cart-product.component';



const appRoutes: Routes = [
 
  { path: 'myAccount', component: AccountComponent,children:[
    { path: 'login', component: LoginComponent }, // url: about/
    { path: 'register', component: RegisterComponent },// url: about/item
  ] },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'productsDetails/:booktitle', component: ProductDetailsComponent},
  { path: 'products', component: ProductsComponent },
  { path: 'myCart', component: CartComponent },
 


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
    RegisterComponent,
    ProductPreviewComponent,
    CartProductComponent
  ],
  imports: [
    BrowserModule, 
     RouterModule.forRoot(appRoutes),
     ReactiveFormsModule, 
    HttpClientModule,
    FormsModule,],
  providers: [BookStoreService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
