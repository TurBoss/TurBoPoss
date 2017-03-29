import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { ServerDownPage } from '../server-down/server-down';

import { DateListPage } from '../date/date-list/date-list';
import { ClientListPage } from '../client/client-list/client-list';
import { ProductListPage } from '../product/product-list/product-list';
import { ServiceListPage } from '../service/service-list/service-list';
import { SuppliesListPage } from '../supplies/supplies-list/supplies-list';


@Component({
  selector: 'start-page',
  templateUrl: 'start-page.html'
})

export class StartPage {

  dateListPage = DateListPage;
  clientListPage = ClientListPage;
  productsListPage = ProductListPage;
  serviceListPage = ServiceListPage;
  suppliesListPage = SuppliesListPage;

  constructor( public http: Http,
               public navCtrl: NavController) {}

  check_server() {

    var link = "http://127.0.0.1:8100/check";

    let type: string = "text/html; charset=UTF-8",
        headers: any = new Headers({ 'Content-Type': type}),
        options: any = new RequestOptions({ headers: headers })

    this.http.get(link, options)
    .subscribe(res => {
      console.log("OKOKOKOK");
    }, (err) => {
      console.log("NONONONO");
      this.navCtrl.push(ServerDownPage, {});
    });
  }

  ionViewWillEnter() {
    this.check_server()
  }
}
