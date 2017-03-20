import { Component } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-product-edit',
  templateUrl: 'product-edit.html'
})


export class ProductEditPage {

  private productItem: any;
  private product : FormGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              public http: Http)
  {
    this.productItem = navParams.get('item');

    this.product = this.formBuilder.group({
      id: [this.productItem.id],
      name: [this.productItem.name, Validators.required],
      description: [this.productItem.description],
      quantity: [this.productItem.quantity, Validators.required],
      price: [this.productItem.price, Validators.required]
    });
  }

  edit() {

    var link = "http://127.0.0.1:8100/product-edit";
    var data = JSON.stringify(this.product.value);

    let type: string = "application/json; charset=UTF-8",
        headers: any = new Headers({ 'Content-Type': type}),
        options: any = new RequestOptions({ headers: headers })

    this.http.post(link, data, options)
    .subscribe(data =>
    {
      if(data.status === 200) {
        console.log("200");
      }
      else {
        console.log("NO OK");
      }
    });
    this.navCtrl.popToRoot();
  }
}
