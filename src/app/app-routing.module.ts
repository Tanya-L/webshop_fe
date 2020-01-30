import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
// import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

// A typical Angular Route has two properties:
// 	- path: a string that matches the URL in the browser address bar.
//  - component: the component that the router should create when navigating to this route.

const routes: Routes = [
  { path: '', component: ProductListComponent, pathMatch: 'full' },
  { path: 'product', component: ProductComponent },
  // { path: 'product/:id', component: ProductComponent },
//   { path: 'orders', component: HeroesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
