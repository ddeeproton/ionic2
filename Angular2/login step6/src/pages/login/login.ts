import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Routes } from '../../app/app.routes';
import {Auth} from '../../providers/auth';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email:string;
  password:string;
  error:string;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private auth:Auth) {}

  goTabs(){
    this.navCtrl.push(Routes.getPage(Routes.TABS));
  }

  openSignup(){
    let modal = this.modalCtrl.create(Routes.getPage(Routes.SIGNUP));
    modal.present();
  }

  login(){
     this.auth.login({email:this.email,password:this.password })
     .then((success)=>{
       console.log("====== ");
       console.log(success.id_token);
       this.goTabs();
     },(error)=>{
       this.error = error._body;
     });
  }

}
