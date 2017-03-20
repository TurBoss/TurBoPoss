import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StartPage } from '../pages/start-page/start-page';

import { DateListPage } from '../pages/date/date-list/date-list';
import { DateCreatePage } from '../pages/date/date-create/date-create';
import { DateDetailsPage } from '../pages/date/date-details/date-details';
import { DatePopOverPage } from '../pages/date/date-details/pop-over';
import { DateEditPage } from '../pages/date/date-edit/date-edit';

import { ClientListPage } from '../pages/client/client-list/client-list';
import { ClientCreatePage } from '../pages/client/client-create/client-create';
import { ClientDetailsPage } from '../pages/client/client-details/client-details';
import { ClientPopOverPage } from '../pages/client/client-details/pop-over';
import { ClientEditPage } from '../pages/client/client-edit/client-edit';

import { ProductListPage } from '../pages/product/product-list/product-list';
import { ProductCreatePage } from '../pages/product/product-create/product-create';
import { ProductDetailsPage } from '../pages/product/product-details/product-details';
import { ProductPopOverPage } from '../pages/product/product-details/pop-over';
import { ProductEditPage } from '../pages/product/product-edit/product-edit';

import { SuppliesListPage } from '../pages/supplies/supplies-list/supplies-list';
import { SuppliesCreatePage } from '../pages/supplies/supplies-create/supplies-create';
import { SuppliesDetailsPage } from '../pages/supplies/supplies-details/supplies-details';
import { SuppliesPopOverPage } from '../pages/supplies/supplies-details/pop-over';
import { SuppliesEditPage } from '../pages/supplies/supplies-edit/supplies-edit';

import { ServiceListPage } from '../pages/service/service-list/service-list';
import { ServiceCreatePage } from '../pages/service/service-create/service-create';
import { ServiceDetailsPage } from '../pages/service/service-details/service-details';
import { ServicePopOverPage } from '../pages/service/service-details/pop-over';
import { ServiceEditPage } from '../pages/service/service-edit/service-edit';

@NgModule({
  declarations: [
    MyApp,

    StartPage,

    DateListPage,
    DateCreatePage,
    DateDetailsPage,
    DatePopOverPage,
    DateEditPage,

    ClientListPage,
    ClientCreatePage,
    ClientDetailsPage,
    ClientPopOverPage,
    ClientEditPage,

    ProductListPage,
    ProductCreatePage,
    ProductDetailsPage,
    ProductPopOverPage,
    ProductEditPage,

    SuppliesListPage,
    SuppliesCreatePage,
    SuppliesDetailsPage,
    SuppliesPopOverPage,
    SuppliesEditPage,

    ServiceListPage,
    ServiceCreatePage,
    ServiceDetailsPage,
    ServicePopOverPage,
    ServiceEditPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    StartPage,

    DateListPage,
    DateCreatePage,
    DateDetailsPage,
    DatePopOverPage,
    DateEditPage,

    ClientListPage,
    ClientCreatePage,
    ClientDetailsPage,
    ClientPopOverPage,
    ClientEditPage,

    ProductListPage,
    ProductCreatePage,
    ProductDetailsPage,
    ProductPopOverPage,
    ProductEditPage,

    SuppliesListPage,
    SuppliesCreatePage,
    SuppliesDetailsPage,
    SuppliesPopOverPage,
    SuppliesEditPage,

    ServiceListPage,
    ServiceCreatePage,
    ServiceDetailsPage,
    ServicePopOverPage,
    ServiceEditPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
