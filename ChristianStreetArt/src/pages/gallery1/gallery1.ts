import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Camera } from 'ionic-native';


/*
  Generated class for the Gallery1 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-gallery1',
  templateUrl: 'gallery1.html'
})
export class Gallery1Page {
  base64Image
  
  constructor(public navCtrl: NavController) {}
  
  accessGallery(){
    Camera.getPicture({
      sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
      destinationType: Camera.DestinationType.DATA_URL
    }).then((imageData) => {
        this.base64Image = 'data:image/jpeg;base64,'+imageData;
    }, (err) => {
        console.log(err);
    });
  }
  
  ionViewDidLoad() {
    
  }

  
}
