import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

//import { DateDetailsPage } from '../date-details/date-details';
import { DateCreatePage } from '../date-create/date-create';


@Component({
  selector: 'page-list',
  templateUrl: 'date-list.html'
})
export class DateListPage {

  dateCreatePage = DateCreatePage;

  selectedItem: any;
  items: Array<{title: string, note: string, date: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.items = [];
    for(let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Nombre',
        note: 'Apellido',
        date: 'Hora'
      });
    }
  }
  /*
  itemTapped(event, item) {
    this.navCtrl.push(DateDetailsPage, {
      item: item
    });
  }
  */
}
