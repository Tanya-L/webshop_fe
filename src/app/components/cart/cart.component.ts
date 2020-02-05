import { Component, OnInit } from '@angular/core';
import { FormBuilder, EmailValidator } from '@angular/forms';

import { CartService } from '../../cart.service';
// import { IProduct } from '../product-list/product-list.component';

interface IProduct {
  id: number;
  name: string;
  price: number;
  actualCost: number;
  imageUrl: string;
  details: string;
  colorName: string;
  sizeName: string;
  materialName: string;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;


  constructor(
    private cartService: CartService,
    ) { }


  ngOnInit() {
    this.cartService.getItems()
      .then((data) => (this.items = data));
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);

    this.items = this.cartService.clearCart();
    // this.checkoutForm.reset();

  }

  // **********
  // ngOnInit() {
  //   fetch('http://localhost:5000/product')
  //     .then(response => response.json())
  //     .then((data: IProduct[]) => (this.products = data));
  // }
}
