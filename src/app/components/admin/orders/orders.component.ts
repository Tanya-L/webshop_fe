import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../cart.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  items;
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getItems().then(data => (this.items = data));
  }
}
