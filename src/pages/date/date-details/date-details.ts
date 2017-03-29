import { Component } from '@angular/core';

import { NavController, NavParams, PopoverController } from 'ionic-angular';

import { DatePopOverPage } from './pop-over'
import { DateEditPage } from '../date-edit/date-edit';


@Component({
  selector: 'page-date-details',
  templateUrl: 'date-details.html'
})

export class DateDetailsPage {

  selectedItem: any;
  popover: any;
  myDate: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public popoverCtrl: PopoverController)
  {
    this.selectedItem = navParams.get('item');
    this.popover = this.popoverCtrl.create(DatePopOverPage, { id: this.selectedItem.id });
    this.popover.onDidDismiss(() => { this.navCtrl.popToRoot() });
    this.myDate = this.selectedItem.date;
  }

  edit(event){
    this.navCtrl.push(DateEditPage, {
      item: this.selectedItem
    });

  }

  delete_confirm(event) {
    this.popover.present({ ev: event });
  }
}
