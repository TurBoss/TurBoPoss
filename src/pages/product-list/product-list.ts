import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ProductDetailsPage } from '../product-details/product-details';


@Component({
  selector: 'page-list',
  templateUrl: 'product-list.html'
})
export class ProductListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{name: string, description: string, price: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.items = [];
    for(let i = 1; i < 4; i++) {
      this.items.push({
        name: 'Producto',
        description: 'Descripcion',
        price: 'Precio'
      });
    }
  }

  itemTapped(event, item) {
    this.navCtrl.push(ProductDetailsPage, {
      item: item
    });
  }
}
