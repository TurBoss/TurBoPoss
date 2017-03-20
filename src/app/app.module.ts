import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StartPage } from '../pages/start-page/start-page';

import { ItemDetailsPage } from '../pages/item-details/item-details';

import { DateListPage } from '../pages/date-list/date-list';
import { DateCreatePage } from '../pages/date-create/date-create';

import { ClientListPage } from '../pages/client-list/client-list';
import { ClientCreatePage } from '../pages/client-create/client-create';
import { ClientDetailsPage } from '../pages/client-details/client-details';
import { ClientPopOverPage } from '../pages/client-details/pop-over';
import { ClientEditPage } from '../pages/client-edit/client-edit';

import { ProductListPage } from '../pages/product-list/product-list';
import { ProductCreatePage } from '../pages/product-create/product-create';
import { ProductDetailsPage } from '../pages/product-details/product-details';
import { ProductPopOverPage } from '../pages/product-details/pop-over';
import { ProductEditPage } from '../pages/product-edit/product-edit';

import { SuppliesListPage } from '../pages/supplies-list/supplies-list';
import { SuppliesCreatePage } from '../pages/supplies-create/supplies-create';
import { SuppliesDetailsPage } from '../pages/supplies-details/supplies-details';
import { SuppliesPopOverPage } from '../pages/supplies-details/pop-over';
import { SuppliesEditPage } from '../pages/supplies-edit/supplies-edit';

@NgModule({
  declarations: [
    MyApp,

    StartPage,

    ItemDetailsPage,

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

    ItemDetailsPage,

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
