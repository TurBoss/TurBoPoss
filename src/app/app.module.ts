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

import { ProductListPage } from '../pages/product-list/product-list';
import { SuppliesListPage } from '../pages/supplies-list/supplies-list';

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

    ProductListPage,
    SuppliesListPage
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

    ProductListPage,
    SuppliesListPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
