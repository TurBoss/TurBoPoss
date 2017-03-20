import { Component } from '@angular/core';

import { NavController, NavParams, PopoverController } from 'ionic-angular';

import { SuppliesPopOverPage } from './pop-over'
import { SuppliesEditPage } from '../supplies-edit/supplies-edit';


@Component({
  selector: 'page-supplies-details',
  templateUrl: 'supplies-details.html'
})

export class SuppliesDetailsPage {
  selectedItem: any;
  popover: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public popoverCtrl: PopoverController)
  {
    this.selectedItem = navParams.get('item');
    this.popover = this.popoverCtrl.create(SuppliesPopOverPage, { id: this.selectedItem.id });
    this.popover.onDidDismiss(() => { this.navCtrl.popToRoot() });
  }

  edit(event){
    this.navCtrl.push(SuppliesEditPage, {
      item: this.selectedItem
    });
  }

  delete_confirm(event) {
    this.popover.present({ ev: event });
  }


}
