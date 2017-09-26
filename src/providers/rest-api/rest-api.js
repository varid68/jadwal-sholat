var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the RestApiProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var RestApiProvider = (function () {
    function RestApiProvider(http) {
        this.http = http;
        this.key = '6ef241d45c8b5e553ba8dcba91bb2f7e';
        this.keyGoogle = 'AIzaSyBye4DxrrGbtM_InkCc6hD_qp6-3bM7ZmU';
    }
    RestApiProvider.prototype.getTime = function (city) {
        return this.http.get("https://muslimsalat.com/" + city + "/daily.json?key=" + this.key)
            .map(this.extract);
    };
    RestApiProvider.prototype.getTimeTomorrow = function (city, date) {
        return this.http.get("https://muslimsalat.com/" + city + "/" + date + ".json?key=" + this.key)
            .map(this.extract);
    };
    RestApiProvider.prototype.search = function (term) {
        return this.http.get("https://maps.googleapis.com/maps/api/place/autocomplete/json?input=" + term + "&types=(cities)&key=" + this.keyGoogle)
            .map(this.extractSearch);
    };
    RestApiProvider.prototype.extract = function (res) {
        var body = res.json();
        return body || {};
    };
    RestApiProvider.prototype.extractSearch = function (res) {
        var body = res.json().predictions;
        return body || {};
    };
    return RestApiProvider;
}());
RestApiProvider = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], RestApiProvider);
export { RestApiProvider };
//# sourceMappingURL=rest-api.js.map