import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { DateDetailsPage } from '../date-details/date-details';
import { DateCreatePage } from '../date-create/date-create';


@Component({
  selector: 'page-date-list',
  templateUrl: 'date-list.html'
})

export class DateListPage {

  dateCreatePage = DateCreatePage;

  search_string: string;

  selectedItem: any;

  all_items: any;

  items: Array<{ id: string,
                 client: string,
                 subject: string,
                 date: string }>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http)
  {

    this.selectedItem = navParams.get('item');
    this.items = [];

  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.items = this.all_items

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item['client']['name'].toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  date_list() {

    this.items = [];

    var link = "http://127.0.0.1:8100/date-list";

    let type: string = "application/json; charset=UTF-8",
        headers: any = new Headers({ 'Content-Type': type}),
        options: any = new RequestOptions({ headers: headers })

    this.http.get(link, options)
      .map(res => res.json())
      .subscribe(data =>
      {
    		for(let i = 0; i < data.length; i++) {
    		  this.items.push({
    		    id: data[i]["id"],
            client: data[i]['client'],
            subject: data[i]['subject'],
            date: data[i]['date'],
    		  });
    		}
        this.all_items = this.items;
    });
  }

  itemTapped(event, item) {
    this.navCtrl.push(DateDetailsPage, {
      item: item
    });
  }

  ionViewWillEnter() {
    this.date_list()
  }
}
