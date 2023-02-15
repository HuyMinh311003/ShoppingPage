import { Component, Input, Output, EventEmitter } from '@angular/core';

import { CartService } from './../../services/cart.service';
@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent {
  constructor(private cartService:CartService) { }

  @Output() addBookCallBack: EventEmitter<any> = new EventEmitter();;

  addBook(book:any){
    this.cartService.addBook(book);
  }

  @Input()
  item: any;
}
