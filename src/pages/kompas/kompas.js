var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, Platform } from 'ionic-angular';
import { DeviceOrientation } from '@ionic-native/device-orientation';
/**
 * Generated class for the KompasPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var KompasPage = (function () {
    function KompasPage(navCtrl, platform, deviceOr) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.deviceOr = deviceOr;
    }
    KompasPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        if (this.platform.is('cordova')) {
            // Watch the device compass heading change
            var subs = this.deviceOr.watchHeading().subscribe(function (data) { return _this.position = data.magneticHeading; });
        }
    };
    return KompasPage;
}());
KompasPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-kompas',
        templateUrl: 'kompas.html',
    }),
    __metadata("design:paramtypes", [NavController,
        Platform,
        DeviceOrientation])
], KompasPage);
export { KompasPage };
//# sourceMappingURL=kompas.js.map