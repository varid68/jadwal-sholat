var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Renderer, ElementRef } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';
/**
 * Generated class for the SettingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SettingPage = (function () {
    function SettingPage(navCtrl, modalCtrl, renderer, elementRef) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.renderer = renderer;
        this.elementRef = elementRef;
    }
    SettingPage.prototype.openModal = function (text) {
        var _this = this;
        var modal = this.modalCtrl.create('PopupModalPage', {
            id: text
        });
        modal.present();
        switch (text) {
            case "volume":
                this.vh = 31;
                break;
            case "bahasa":
                this.vh = 20;
                break;
            case "nama":
                this.vh = 27;
                break;
            case "metode":
                this.vh = 7;
                break;
            default:
                this.vh = 33;
                break;
        }
        setTimeout(function () {
            var element = document.getElementsByTagName('ion-modal')[0];
            _this.renderer.setElementStyle(element, 'padding-top', _this.vh + 'vh');
            _this.renderer.setElementStyle(element, 'padding-bottom', _this.vh + 'vh');
            _this.renderer.setElementStyle(element, 'padding-left', 10 + 'vw');
            _this.renderer.setElementStyle(element, 'padding-right', 10 + 'vw');
        }, 100);
    };
    SettingPage.prototype.toKoreksi = function () {
        this.navCtrl.push('KoreksiPage');
    };
    SettingPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    return SettingPage;
}());
SettingPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-setting',
        templateUrl: 'setting.html',
    }),
    __metadata("design:paramtypes", [NavController,
        ModalController,
        Renderer,
        ElementRef])
], SettingPage);
export { SettingPage };
//# sourceMappingURL=setting.js.map