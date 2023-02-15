import { Component, OnInit } from '@angular/core';

import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  constructor(private cartService: CartService) { }

  cart:any;

  addBook(item_cart: any){
    this.cartService.addBook(item_cart);
  }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }
}
