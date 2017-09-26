import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the RestApiProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RestApiProvider {
	key: string= '6ef241d45c8b5e553ba8dcba91bb2f7e';
  keyGoogle: string= 'AIzaSyBye4DxrrGbtM_InkCc6hD_qp6-3bM7ZmU';

  constructor(public http: Http) {}

  getTime(city:string): Observable<any>{
    return this.http.get(`https://muslimsalat.com/${city}/daily.json?key=${this.key}`)
    	.map(this.extract);
  }

  getTimeTomorrow(city:string, date:string): Observable<any> {
  	return this.http.get(`https://muslimsalat.com/${city}/${date}.json?key=${this.key}`)
    	.map(this.extract);	
  }

  search(term:string){
    return this.http.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${term}&types=(cities)&key=${this.keyGoogle}`)
      .map(this.extractSearch);
  }

  private extract (res:Response){
  	let body = res.json();

  	return body || {};
  }

  private extractSearch (res:Response){
    let body = res.json().predictions;

    return body || {};
  }

}
