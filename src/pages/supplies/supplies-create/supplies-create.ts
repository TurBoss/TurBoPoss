import { Component } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-supplies-create',
  templateUrl: 'supplies-create.html'
})


export class SuppliesCreatePage {

  private supplies : FormGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              public http: Http)
  {

    this.supplies = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      quantity: ['', Validators.required]
    });
  }

  register() {

    var link = "http://127.0.0.1:8100/supplies-create";
    var data = JSON.stringify(this.supplies.value);

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
