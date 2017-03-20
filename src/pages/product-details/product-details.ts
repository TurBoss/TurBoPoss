import { Component } from '@angular/core';

import { NavController, NavParams, PopoverController  } from 'ionic-angular';

import { ProductPopOverPage } from './pop-over'
import { ClientEditPage } from '../client-edit/client-edit';


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
  delete_confirm(event) {
    this.popover.present({ ev: event });
  }
}
