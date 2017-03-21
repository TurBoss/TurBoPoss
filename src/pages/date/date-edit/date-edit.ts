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

  private dateItem: any;
  private date : FormGroup;
  public myDate: string;
  public myHour: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              public http: Http)
  {
    this.dateItem = navParams.get('item');

    this.myDate = this.dateItem.date.day + "/" + this.dateItem.date.month + "/" + this.dateItem.date.year
    this.myHour = this.dateItem.date.hour + ":" + this.dateItem.date.minutes

    this.date = this.formBuilder.group({
      id: [this.dateItem.id],
      name: [this.dateItem.name, Validators.required],
      surname: [this.dateItem.surname, Validators.required],
      date: ['', Validators.required],
      hour: ['', Validators.required]
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
}
