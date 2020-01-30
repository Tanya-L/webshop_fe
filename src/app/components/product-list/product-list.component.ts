import { Component } from '@angular/core';

// import { product } from '../product';

interface IProduct {
  id: number;
  name: string;
  price: number;
  actualCost: number;
  imageUrl: string;
  details: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: IProduct[];

  share() {
    window.alert('The product has been shared!');
  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {
    fetch('http://localhost:5000/product')
      .then(response => response.json())
      .then((data: IProduct[]) => this.products = data);
  }
}
