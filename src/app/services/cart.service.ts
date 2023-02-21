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
    for(let i = 0; i < this.cart.length; i++){
      if(this.cart[i].book.id == book.id){
        this.cart[i].quantity +=1;
        return;
      }
    }
    this.cart.push(
      {
        book: book,
        quantity: 1
      }
    )
  }
}
