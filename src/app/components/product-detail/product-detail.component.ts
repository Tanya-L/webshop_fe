import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../product-list/product-list.component';
// import { products } from '../product';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId: number;
  product: IProduct;
  _service: CartService;

  constructor(
    private route: ActivatedRoute,
    private service: CartService) {
    this._service = service;
  }

  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this._service.addToCart(product);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.productId = +params.get('id');

      fetch('http://localhost:5000/product/' + this.productId)
        .then(response => response.json())
        .then((data: IProduct) => (this.product = data));
    });
  }
}
