import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';



/*
  Generated class for the Places page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.

<header-content title="Arround"></header-content>

@Input() title: String;

{{title}}
*/
@Component({
  selector: 'header-content',
  template: `
    
    <ion-header>

        <ion-navbar>
            <ion-title>{{title}}</ion-title>
            
            <ion-buttons end> <!-- Place le bouton à droite à cause du "end" -->
            <button ion-button menuToggle>
                <ion-icon name="menu"></ion-icon>
            </button>
            </ion-buttons>
        </ion-navbar>




    </ion-header>
  `

})



export class HeaderPage {

    // Récupère l'attribut title d'ici
    // <header-content title="Arround"></header-content>
    @Input() title: String;

  constructor(public navCtrl: NavController) {
    

  }

  ionViewDidLoad() {
    console.log('Hello PlacesPage Page');
  }

}
