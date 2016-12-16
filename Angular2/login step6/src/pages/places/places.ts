import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {AuthHttp} from 'angular2-jwt';

import {Endpoints} from '../../providers/endpoints';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

/*
  Generated class for the Places page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-places',
  templateUrl: 'places.html'
})
export class PlacesPage {

  data: any[];

  constructor(public navCtrl: NavController, private authHttp: AuthHttp, private endpoints: Endpoints) {
    this.getPlaces();
  }

  ionViewDidLoad() {
    console.log('Hello PlacesPage Page');
  }

  getPlaces() {
    return new Promise(resolve => {
      this.authHttp.get(this.endpoints.getPlaces())
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        console.log(data);
      });
    });
  }

}
