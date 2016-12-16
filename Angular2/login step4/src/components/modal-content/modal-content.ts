import { Component } from '@angular/core';
import { Modal, NavController, ViewController } from 'ionic-angular';

@Component({
    template: `
        <ion-content padding>
            <h2>I'm a modal</h2>
            <button (click)="close()">Close</button>
        </ion-content>
    `,

})

class MyModal {
    
}