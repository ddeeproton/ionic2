import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular2: Let's do it!</h1>
        <h2>This is from our first component <i>nat-app</i></h2>

        <h1>bind Click</h1>
        <input type="text" #inputName (click)="inputName.value='Yo'" />
        <input type="text" #inputOther  (click)="clickName()" />

        <h1>ngFor</h1>
        <ul>
            <li *ngFor="let d of data">
                {{d}}
            </li>
        </ul>

        <h1>ngIf</h1>
        <div *ngIf="isDisplay">
         isDisplay = true;
        </div>
        <div *ngIf="isDisplay === false">
         isDisplay = false;
        </div>
    `
})


// Par convention on rajoute toujours Component à la fin du nom de la classe
export class AppComponent { 
    isDisplay = false;
    data: any[] = ['test','fssf','grth'];
    public clickName() {
        alert("click!");
    }
    
}
