import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { TopBarComponent } from '../app/components/top-bar/top-bar.component';
import { ProductListComponent } from '../app/components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
    ]),
    BrowserAnimationsModule,
    MatIconModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
