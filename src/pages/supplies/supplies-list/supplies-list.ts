import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { SuppliesDetailsPage } from '../supplies-details/supplies-details';
import { SuppliesCreatePage } from '../supplies-create/supplies-create';


@Component({
  selector: 'page-supplies-list',
  templateUrl: 'supplies-list.html'
})

export class SuppliesListPage {

  suppliesCreatePage = SuppliesCreatePage;

  selectedItem: any;
  items: Array<{id: string,
                name: string,
                description: string,
                quantity: string}>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http)
  {

    this.selectedItem = navParams.get('item');
    this.items = [];

  }

  supplies_list() {

    this.items = [];

    var link = "http://127.0.0.1:8100/supplies-list";

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
      			name: data[i]["name"],
      			description: data[i]["description"],
      			quantity: data[i]["quantity"]
    		  });
    		}
    });
  }

  itemTapped(event, item) {
    this.navCtrl.push(SuppliesDetailsPage, {
      item: item
    });
  }

  ionViewWillEnter() {
    this.supplies_list()
  }
}
