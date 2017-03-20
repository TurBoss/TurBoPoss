import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { StartPage } from '../pages/start-page/start-page';

import { DateListPage } from '../pages/date-list/date-list';
import { ClientListPage } from '../pages/client-list/client-list';
import { ProductListPage } from '../pages/product-list/product-list';
import { SuppliesListPage } from '../pages/supplies-list/supplies-list';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = StartPage;

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();

    this.pages = [
      { title: 'Inicio', component: StartPage },
      { title: 'Citas', component: DateListPage },
      { title: 'Clientes', component: ClientListPage },
      { title: 'Productos', component: ProductListPage },
      { title: 'Consumibles', component: SuppliesListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    this.menu.close();
    this.nav.setRoot(page.component);
  }
}
