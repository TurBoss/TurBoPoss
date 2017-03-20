import { Component } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { ViewController, NavController, NavParams } from 'ionic-angular';


@Component({
  templateUrl: 'pop-over.html'
})

export class ServicePopOverPage {
  id: string;
  constructor(public viewCtrl: ViewController,
              public navCtrl: NavController,
              public params: NavParams,
              public http: Http)
  {
    this.id = this.params.get('id');
  }

  public  delete() {

    var link = "http://127.0.0.1:8100/service-delete";
    var data = JSON.stringify(this.id);

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
    this.close()

  }

  close() {
    this.viewCtrl.dismiss();
  }
}
