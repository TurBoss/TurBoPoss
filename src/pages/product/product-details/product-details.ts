import { Component } from '@angular/core';

import { NavController, NavParams, PopoverController  } from 'ionic-angular';

import { ProductPopOverPage } from './pop-over'
import { ProductEditPage } from '../product-edit/product-edit';


@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html'
})
export class ProductDetailsPage {
  selectedItem: any;
  popover: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public popoverCtrl: PopoverController)
  {
    this.selectedItem = navParams.get('item');
    this.popover = this.popoverCtrl.create(ProductPopOverPage, { id: this.selectedItem.id });
    this.popover.onDidDismiss(() => { this.navCtrl.popToRoot() });
  }

  edit(event){
    this.navCtrl.push(ProductEditPage, {
      item: this.selectedItem
    });

  }

  delete_confirm(event) {
    this.popover.present({ ev: event });
  }
}
