import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Routes } from '../../app/app.routes';

import { File } from 'ionic-native';
 


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  messageDebug: string;


  slidesOptions:Object={
    pager:true,
  };

  constructor(public navCtrl: NavController) {
    let fs:string = cordova.file.dataDirectory;
    this.messageDebug = "loading...";
    File.checkDir(fs, 'mydir').then(_ => {
      this.messageDebug = "directory found.";
    }).catch(err => {
      this.messageDebug = "directory not found.";
    });
  }

  goLogin(){
    this.navCtrl.push(Routes.getPage(Routes.LOGIN));
  }

}
