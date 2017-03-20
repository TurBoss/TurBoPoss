import { Component } from '@angular/core';

import { NavController, NavParams, PopoverController } from 'ionic-angular';

import { ClientPopOverPage } from './pop-over'
import { ClientEditPage } from '../client-edit/client-edit';


@Component({
  selector: 'page-item-details',
  templateUrl: 'client-details.html'
})

export class ClientDetailsPage {
  selectedItem: any;
  popover: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public popoverCtrl: PopoverController)
  {
    this.selectedItem = navParams.get('item');
    this.popover = this.popoverCtrl.create(ClientPopOverPage, { id: this.selectedItem.id });
    this.popover.onDidDismiss(() => { this.navCtrl.popToRoot() });
  }

  edit(event){
    this.navCtrl.push(ClientEditPage, {
      item: this.selectedItem
    });

  }

  delete_confirm(event) {
    this.popover.present({ ev: event });
  }


}
