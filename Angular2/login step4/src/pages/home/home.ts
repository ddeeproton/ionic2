import { Component } from '@angular/core';

import { NavController, ModalController, NavParams } from 'ionic-angular';
import { Routes } from '../../app/app.routes';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  slidesOptions:Object={
    pager:true,
  };

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {}

  goLogin(){
    this.navCtrl.push(Routes.getPage(Routes.LOGIN));
  }

 presentProfileModal() {
   let profileModal = this.modalCtrl.create(Profile, { userId: 8675309 });
   profileModal.onDidDismiss(data => {
     console.log(data);
   });
   profileModal.present();
 }

}


@Component({})
class Profile {

 constructor(params: NavParams) {
   console.log('UserId', params.get('userId'));
 }

}