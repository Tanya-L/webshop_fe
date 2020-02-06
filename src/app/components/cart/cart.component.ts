import { Component, OnInit } from '@angular/core';

import { CartService } from '../../cart.service';

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
    this.items = this.cartService.getItems();
    console.log(this.items);
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);

    this.items = this.cartService.clearCart();

  }

}
