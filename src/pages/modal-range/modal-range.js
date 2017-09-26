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
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
/**
 * Generated class for the ModalRangePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ModalRangePage = (function () {
    function ModalRangePage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.rangeValue = 0;
    }
    ModalRangePage.prototype.ionViewDidLoad = function () {
        this.id = this.navParams.get('id');
    };
    ModalRangePage.prototype.changeMinutes = function () {
        var callback = {
            range: this.rangeValue,
            id: this.id
        };
        this.viewCtrl.dismiss(callback);
    };
    ModalRangePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return ModalRangePage;
}());
ModalRangePage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-modal-range',
        templateUrl: 'modal-range.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, ViewController])
], ModalRangePage);
export { ModalRangePage };
//# sourceMappingURL=modal-range.js.map