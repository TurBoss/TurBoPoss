import { Component } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-date-edit',
  templateUrl: 'date-edit.html'
})


export class DateEditPage {

  public dateItem: any;
  private date : FormGroup;

  optionsList: Array<{ id: string,
                       name: string,
                       surname: string }> = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              public http: Http)
  {
    this.dateItem = navParams.get('item');

    console.log(this.dateItem);

    this.date = this.formBuilder.group({
      id: [this.dateItem.id],
      client: [this.dateItem.client.id, Validators.required],
      date: [this.dateItem.date, Validators.required]
    });
  }

  client_list() {

    this.optionsList = [];

    var link = "http://127.0.0.1:8100/client-list";

    let type: string = "application/json; charset=UTF-8",
        headers: any = new Headers({ 'Content-Type': type}),
        options: any = new RequestOptions({ headers: headers })

    this.http.get(link, options)
    .map(res => res.json())
    .subscribe(data =>
    {
        for(let i = 0; i < data.length; i++) {
          this.optionsList.push({
            id: data[i]["id"],
            name: data[i]["name"],
            surname: data[i]["surname"]
          });
        }
    });
  }

  edit() {

    var link = "http://127.0.0.1:8100/date-edit";
    var data = JSON.stringify(this.date.value);

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

  ionViewWillEnter() {
    this.client_list()
  }

}
