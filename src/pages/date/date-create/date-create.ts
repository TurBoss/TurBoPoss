import { Component } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-date-create',
  templateUrl: 'date-create.html'
})


export class DateCreatePage {

  private date: FormGroup;

  optionsList: Array<{ id: number, name: string }> = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              public http: Http)
  {

    this.date = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      date: ['', Validators.required],
      hour: ['', Validators.required]
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
      			name: data[i]["name"]
    		  });
    		}
    });
  }

  register() {

    var link = "http://127.0.0.1:8100/date-create";
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
