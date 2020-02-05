import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { PaymentComponent } from './components/payment/payment.component';
import { UserComponent } from './components/user/user.component';

// A typical Angular Route has two properties:
// 	- path: a string that matches the URL in the browser address bar.
//  - component: the component that the router should create when navigating to this route.

const routes: Routes = [
  { path: '', component: ProductListComponent, pathMatch: 'full' },
  { path: 'product', component: ProductComponent, pathMatch: 'full' },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'shipping', component: ShippingComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'user', component: UserComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
