import { Component } from '@angular/core';
// import {MatCardModule, MatGridListModule } from '@angular/material';

// import { product } from '../product';

export interface IProduct {
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
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: IProduct[];

  addToCart() {
    window.alert('The product added to cart!');
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {
    fetch('http://localhost:5000/product')
      .then(response => response.json())
      .then((data: IProduct[]) => this.products = data);
  }
}
