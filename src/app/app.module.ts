import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StartPage } from '../pages/start-page/start-page';

import { DateListPage } from '../pages/date/date-list/date-list';
import { DateCreatePage } from '../pages/date/date-create/date-create';

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

@NgModule({
  declarations: [
    MyApp,

    StartPage,

    DateListPage,
    DateCreatePage,

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
    SuppliesEditPage
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
    SuppliesEditPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
