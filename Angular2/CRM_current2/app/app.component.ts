import { Component } from '@angular/core';

@Component({
    selector: 'nat-app',
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'></a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/index.html']">Welcome</a></li>
                    <li><a [routerLink]="['/home']">Home</a></li>
                    <li><a [routerLink]="['/products']">Product List</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
    `
})
export class AppComponent { }
