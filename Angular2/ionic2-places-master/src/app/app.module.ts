import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { HeaderPage } from '../pages/header/header';

import { MytabsPage } from '../pages/mytabs/mytabs';


import { AddPage } from '../pages/add/add';
import { AroundPage } from '../pages/around/around';
import { FriendsPage } from '../pages/friends/friends';
import { PlacesPage } from '../pages/places/places';



@NgModule({
  declarations: [
    MyApp,
    MytabsPage,
    HomePage,
    AddPage,
    AroundPage,
    FriendsPage,
    PlacesPage,
    HeaderPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MytabsPage,
    HomePage,
    AddPage,
    AroundPage,
    FriendsPage,
    PlacesPage,
    HeaderPage
  ],
  providers: []
})
export class AppModule {}
