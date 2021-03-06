import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { Storage } from '@ionic/storage';
import {JwtHelper, AuthHttp} from 'angular2-jwt';
import {Endpoints} from './endpoints';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class Auth {

  contentHeader: Headers = new Headers({"Content-Type": "application/json"});
  jwtHelper: JwtHelper = new JwtHelper();
  local: Storage = new Storage();
  user: string;
  error: string;

  constructor(private authHttp: AuthHttp, private endpoints: Endpoints) {
    this.local.get('id_token').then(token => {
      this.setUser(token);
    }).catch(error => {
      console.log(error);
    });
  }

  signup(credentials) {
    let observable = this.authHttp.post(this.endpoints.getSignup(),
      JSON.stringify(credentials),{ headers: this.contentHeader })
      .map(res => { return res.json()})
        return observable.toPromise().then((data)=>{
          this.authSuccess(data.id_token);
          return data;
        });
  }

  authSuccess(id_token) {
    this.local.set('id_token', id_token);
    this.setUser(id_token);
  }

  setUser(token){
    this.user = this.jwtHelper.decodeToken(token);
  }


}
