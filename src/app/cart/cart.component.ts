import { Component } from '@angular/core';
import { Product } from '../interfaces';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  totals: number = 0;
  products: Product[] = [
    {
      id: 1,
      name: 'Means jeans',
      price: 10,
      image: '../../assets/product-3.jpg',
      quantity: 1,
      subt: 10
    },
    {
      id: 2,
      name: 'womens jeans',
      price: 20,
      image: '../../assets/product-1.jpg',
      quantity: 1,
      subt: 20
    },
    {
      id: 3,
      name: 'kids jeans ',
      price: 30,
      image: '../../assets/product-2.jpg',
      quantity: 1,
      subt: 30
    }
  ];

  cart: Product[] = [];



  addToCart(product: Product) {
    const index = this.cart.findIndex(p => p.id === product.id);
    if (index !== -1) {

      this.cart[index].quantity++;
      this.cart[index].subt = this.cart[index].price * this.cart[index].quantity;
      this.totals = 0;
      this.cart.forEach((item) => this.totals = item.subt + this.totals)


    } else {
      this.cart.push({ ...product });
      console.log(this.cart);
      this.totals = 0;
      this.cart.forEach((item) => this.totals = item.subt + this.totals)

    }
    console.log(this.totals)

  };

  cartTotals() {

    this.cart.forEach((item) => this.totals = this.totals + item.subt);
    console.log("Totals:=", this.totals);
  };

}




