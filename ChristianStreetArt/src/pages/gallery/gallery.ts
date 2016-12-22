import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Page1 } from '../page1/page1';

/*
  Generated class for the Gallery page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
	selector: 'page-gallery',
	templateUrl: 'gallery.html'
})
export class GalleryPage {

	items = [];

	constructor(public navCtrl: NavController) {
		for (let x = 0; x < 5; x++) {
			this.items.push(x);
		}
	}


	ionViewDidLoad() {
	console.log('Hello GalleryPage Page');
	}

	map(item) {
		this.navCtrl.setRoot(Page1);
	}
}
