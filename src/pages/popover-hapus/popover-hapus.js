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
import { IonicPage, NavController, ViewController } from 'ionic-angular';
/**
 * Generated class for the PopoverHapusPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PopoverHapusPage = (function () {
    function PopoverHapusPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    PopoverHapusPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return PopoverHapusPage;
}());
PopoverHapusPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-popover-hapus',
        templateUrl: 'popover-hapus.html',
    }),
    __metadata("design:paramtypes", [NavController, ViewController])
], PopoverHapusPage);
export { PopoverHapusPage };
//# sourceMappingURL=popover-hapus.js.map