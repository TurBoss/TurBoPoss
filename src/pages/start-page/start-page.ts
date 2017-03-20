import { Component } from '@angular/core';

import { DateListPage } from '../date-list/date-list';
import { ClientListPage } from '../client-list/client-list';
import { ProductListPage } from '../product-list/product-list';
import { SuppliesListPage } from '../supplies-list/supplies-list';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'start-page.html'
})
export class StartPage {
  dateListPage = DateListPage;
  clientListPage = ClientListPage;
  productsListPage = ProductListPage;
  suppliesListPage = SuppliesListPage;

  constructor() {

  }
}
