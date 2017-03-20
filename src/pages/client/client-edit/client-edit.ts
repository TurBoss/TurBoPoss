import { Component } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-client-edit',
  templateUrl: 'client-edit.html'
})


export class ClientEditPage {

  private clientItem: any;
  private client : FormGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              public http: Http)
  {
    this.clientItem = navParams.get('item');

    this.client = this.formBuilder.group({
      id: [this.clientItem.id],
      name: [this.clientItem.name, Validators.required],
      surname: [this.clientItem.surname, Validators.required],
      tlf: [this.clientItem.tlf],
      email: [this.clientItem.email],
      nif: [this.clientItem.nif],
    });
  }

  edit() {

    var link = "http://127.0.0.1:8100/client-edit";
    var data = JSON.stringify(this.client.value);

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
