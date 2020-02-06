import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './components/product-list/product-list.component';
import { Observable } from 'rxjs';
import { isNgTemplate } from '@angular/compiler';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  constructor(
    private http: HttpClient,
    private router: Router) {}

  firstLoad(){
    // TODO 
  }

  async addToCart(product: IProduct) {
    this.items.push(product);
    // tslint:disable-next-line: quotemark
    localStorage.setItem("cart", JSON.stringify(this.items));

    // const newRow = {
    //   id: 0,
    //   customerId: 1,
    //   orderId: 0
    // };
    // const response = await fetch(
    //   'http://localhost:5000/orderRow/' + product.id,
    //   {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(newRow)
    //   }
    // );
    // return await response.json();
  }

  getItems() {
    // return fetch('http://localhost:5000/orderRow/1').then(response =>
    //   response.json()
    // );
    //localStorage.getItem('cart');
    //JSON.parse(localStorage.getItem('cart'));
    return this.items;
  }

  async removeCartItemAsync(orderRowId) {
    const response = await fetch(
      'http://localhost:5000/orderRow/' + orderRowId,
      {
        method: 'DELETE'
      }
    );
  }

  removeCartItem(orderRowId) {
    // TODO splice items array?
    this.removeCartItemAsync(orderRowId).then(_ => location.reload());
    localStorage.setItem('cart', JSON.stringify(this.items));

  }

  totalPrice(items) {
    let summ = 0;
    items.forEach(element => {
      summ += element.price;
    });
    return summ;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

  async createOrder() {
    const response = await fetch('http://localhost:5000/order/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.items)
    });
    this.clearCart();
    this.router.navigate(['/thanks']);
  }


  clearCart() {
    this.items = [];
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  // window.localStorage.setItem('order', JSON.stringify(data));
  //   window.localStorage.getItem('order');
  //   JSON.parse(window.localStorage.getItem('order'));
}
