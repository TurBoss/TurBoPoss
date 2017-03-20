import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html'
})
export class ProductDetailsPage {
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('item');
  }
}
