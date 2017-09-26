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
 * Generated class for the KoreksiPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var KoreksiPage = (function () {
    function KoreksiPage(navCtrl, modalCtrl, renderer, elementRef) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.subuh = 0;
        this.dzuhur = 0;
        this.ashar = 0;
        this.maghrib = 0;
        this.isya = 0;
    }
    KoreksiPage.prototype.openModal = function (solat) {
        var _this = this;
        var modal = this.modalCtrl.create('ModalRangePage', {
            id: solat
        });
        modal.present();
        setTimeout(function () {
            var element = document.getElementsByTagName('ion-modal')[0];
            _this.renderer.setElementStyle(element, 'padding-top', 66 + 'vw');
            _this.renderer.setElementStyle(element, 'padding-bottom', 66 + 'vw');
            _this.renderer.setElementStyle(element, 'padding-left', 2 + 'vh');
            _this.renderer.setElementStyle(element, 'padding-right', 2 + 'vh');
        }, 100);
        modal.onDidDismiss(function (data) {
            if (data !== undefined) {
                switch (data.id) {
                    case 'Subuh':
                        _this.subuh = data.range;
                        break;
                    case 'Dzuhur':
                        _this.dzuhur = data.range;
                        break;
                    case 'Ashar':
                        _this.ashar = data.range;
                        break;
                    case 'Maghrib':
                        _this.maghrib = data.range;
                        break;
                    default:
                        _this.isya = data.range;
                        break;
                }
            }
        });
    };
    KoreksiPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    return KoreksiPage;
}());
KoreksiPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-koreksi',
        templateUrl: 'koreksi.html',
    }),
    __metadata("design:paramtypes", [NavController,
        ModalController,
        Renderer,
        ElementRef])
], KoreksiPage);
export { KoreksiPage };
//# sourceMappingURL=koreksi.js.map