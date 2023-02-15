import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() { }

  cart = new Array();

  getCart() {
    return this.cart;
  }

  addBook(book:any){
    this.cart.push(
      {
        book: book,
        quantity: 1
      }
    )
  }
}
