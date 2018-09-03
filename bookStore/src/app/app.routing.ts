
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';




const appRoutes: Routes = [
 
  { path: 'myAccount', component: AccountComponent,children:[
    { path: 'login', component: LoginComponent }, // url: about/
    { path: 'register', component: RegisterComponent },// url: about/item
  ] },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'productsDetails/:book', component: ProductDetailsComponent},
  { path: 'products', component: ProductsComponent },
  { path: 'myCart', component: CartComponent },
 


];
export const routing = RouterModule.forRoot(appRoutes);