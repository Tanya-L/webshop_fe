import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];

  constructor(
    private http: HttpClient
  ) {}

  addToCart(product) {
    console.log(this.items);
    this.items.push(product);
   }

  getItems() {
    console.log(this.items);
    return this.items;

  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}
