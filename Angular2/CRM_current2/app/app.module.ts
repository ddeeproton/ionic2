import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppComponent }  from './app.component';
import { HomeComponent }  from './home.component';
//import { ProductComponent }  from './product.component';

import { ProductModule } from './product.module';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([ // Noter que c'est forRoot (pour la navigation principale)
      { path: 'home', component: HomeComponent}, // http://.../products
      // { path: 'products', component: ProductComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule
    // ProductComponent
  ],
  declarations: [ AppComponent, HomeComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
