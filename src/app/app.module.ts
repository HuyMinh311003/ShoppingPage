import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ItemCardComponent } from './components/item-card/item-card.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';

import { SharedMaterialModule } from './modules/shared-material/shared-material.module';
@NgModule({
  declarations: [
    AppComponent,
    ItemCardComponent,
    ToolBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
