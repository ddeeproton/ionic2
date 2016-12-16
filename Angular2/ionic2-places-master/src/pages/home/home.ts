import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { MytabsPage } from '../mytabs/mytabs'



@Component({
  selector: 'page-home',
  styles: [
    '.sBlue { border:1px solid blue;color:white; }',
    '.sYellow { border:1px solid yellow; }',
    '.sGreen { border:1px solid green; }',
  
  ],
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController) {
    
  }

  goTabs() {
    this.navCtrl.push(MytabsPage);
  }

}
