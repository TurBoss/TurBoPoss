import { Component } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-service-edit',
  templateUrl: 'service-edit.html'
})


export class ServiceEditPage {

  private serviceItem: any;
  private service : FormGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              public http: Http)
  {
    this.serviceItem = navParams.get('item');

    this.service = this.formBuilder.group({
      id: [this.serviceItem.id],
      name: [this.serviceItem.name, Validators.required],
      description: [this.serviceItem.description],
      price: [this.serviceItem.price, Validators.required]
    });
  }

  edit() {

    var link = "http://127.0.0.1:8100/service-edit";
    var data = JSON.stringify(this.service.value);

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
