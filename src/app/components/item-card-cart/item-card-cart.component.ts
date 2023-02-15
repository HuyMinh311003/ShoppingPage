import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-card-cart',
  templateUrl: './item-card-cart.component.html',
  styleUrls: ['./item-card-cart.component.scss']
})
export class ItemCardCartComponent {
  @Input()
  item_cart: any;
}
