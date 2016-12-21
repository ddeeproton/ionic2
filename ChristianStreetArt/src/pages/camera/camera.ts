import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from 'ionic-native';


/*
  Generated class for the Camera page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})
export class CameraPage {
	
	base64Image = '';
	//imagePath = '';
	
	constructor(public navCtrl: NavController) {

		// Get base64 
		Camera.getPicture({ 
			quality: 25,
			destinationType: Camera.DestinationType.DATA_URL
		}).then((imageData) => {
			// imageData is either a base64 encoded string or a file URI
			// If it's base64:
			this.base64Image = 'data:image/jpeg;base64,' + imageData;
			//this.imagePath = imageData;
		}, (err) => {
			// Handle error
		});

		/*
		// Get URI
		Camera.getPicture({ 
			quality: 25,
			destinationType: Camera.DestinationType.FILE_URI
		}).then((imageData) => {
			// imageData is either a base64 encoded string or a file URI
			// If it's base64:
			//this.base64Image = 'data:image/jpeg;base64,' + imageData;
			this.imagePath = imageData;
		}, (err) => {
			// Handle error
		});
		*/

	}

	ionViewDidLoad() {
		console.log('Hello CameraPage Page');
	}

}
