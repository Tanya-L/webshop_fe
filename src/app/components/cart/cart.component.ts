import { Component, OnInit } from '@angular/core';
import { FormBuilder, EmailValidator } from '@angular/forms';

import { CartService } from '../../cart.service';
import { IProduct } from '../product-list/product-list.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    ) { }


  ngOnInit() {
    this.cartService.getItems()
      .then((data) => (this.items = data));

    this.checkoutForm = this.formBuilder.group({
      // FirstName: '',
      // LastName: '',
      name: '',
      email: '',
      address: '',
      telephone: ''
    });
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

  }

  // **********
  // ngOnInit() {
  //   fetch('http://localhost:5000/product')
  //     .then(response => response.json())
  //     .then((data: IProduct[]) => (this.products = data));
  // }

    // let name = document.getElementById('name').value;

  //   let postData = {
  //     customer: {
  //       // FirstName: name,
  //       email: EmailValidator,
  //       ...
  //     // },
  //     cart: this.cartService.getItems()
  //   };

  //   fetch('', {
  //     body: {
  //       newOrder: JSON.stringify(postData)
  //     },
  //     headers: {

  //     }
  //   });
  // }
}
