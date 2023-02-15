import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

import { ItemCardComponent } from 'src/app/components/item-card/item-card.component';
import { ItemCardCartComponent } from 'src/app/components/item-card-cart/item-card-cart.component';

@NgModule({
  declarations: [
    ItemCardComponent,
    ItemCardCartComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ],
  exports: [
    ItemCardComponent,
    ItemCardCartComponent,

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ]
})
export class SharedMaterialModule { }
