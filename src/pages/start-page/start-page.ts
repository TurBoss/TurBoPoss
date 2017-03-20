import { Component } from '@angular/core';

import { DateListPage } from '../date/date-list/date-list';
import { ClientListPage } from '../client/client-list/client-list';
import { ProductListPage } from '../product/product-list/product-list';
//import { ServiceListPage } from '../service/service-list/service-list';
import { SuppliesListPage } from '../supplies/supplies-list/supplies-list';


@Component({
  selector: 'start-page',
  templateUrl: 'start-page.html'
})

export class StartPage {
  dateListPage = DateListPage;
  clientListPage = ClientListPage;
  productsListPage = ProductListPage;
  //serviceListPage = ServiceListPage;
  suppliesListPage = SuppliesListPage;

  constructor() {}
}
