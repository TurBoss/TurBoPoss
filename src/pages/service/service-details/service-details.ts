import { Component } from '@angular/core';

import { NavController, NavParams, PopoverController  } from 'ionic-angular';

import { ServicePopOverPage } from './pop-over'
import { ServiceEditPage } from '../service-edit/service-edit';


@Component({
  selector: 'page-service-details',
  templateUrl: 'service-details.html'
})
export class ServiceDetailsPage {
  selectedItem: any;
  popover: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public popoverCtrl: PopoverController)
  {
    this.selectedItem = navParams.get('item');
    this.popover = this.popoverCtrl.create(ServicePopOverPage, { id: this.selectedItem.id });
    this.popover.onDidDismiss(() => { this.navCtrl.popToRoot() });
  }

  edit(event){
    this.navCtrl.push(ServiceEditPage, {
      item: this.selectedItem
    });

  }

  delete_confirm(event) {
    this.popover.present({ ev: event });
  }
}
