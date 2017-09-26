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
import { IonicPage, NavController, NavParams, AlertController, ViewController, ModalController, App } from 'ionic-angular';
/**
 * Generated class for the PopoverPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PopoverPage = (function () {
    function PopoverPage(navCtrl, navParams, alertCtrl, modalCtrl, viewCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.app = app;
    }
    PopoverPage.prototype.ionViewWillEnter = function () {
        this.posisiPopup = this.navParams.get('openPopup');
    };
    PopoverPage.prototype.openModal = function (link) {
        var _this = this;
        if (link == 'ModalTentangPage')
            this.viewCtrl.dismiss();
        var modal = this.modalCtrl.create(link);
        modal.present();
        modal.onDidDismiss(function (data) {
            var a = {
                marker: 'ok',
                city: data
            };
            _this.viewCtrl.dismiss(a);
        });
    };
    PopoverPage.prototype.presentAlert = function (text) {
        if (text !== 'iklan') {
            var Text = 'telah memberikan aplikasi ini 5 bintang';
        }
        else {
            var Text = 'iklan berhasil dihilangkan';
        }
        var alert = this.alertCtrl.create({
            title: 'Terima Kasih',
            message: Text,
            buttons: [{
                    text: 'OK',
                    role: 'cancel'
                }]
        });
        this.viewCtrl.dismiss().then(function () {
            alert.present();
        });
    };
    PopoverPage.prototype.toPage = function () {
        var _this = this;
        this.viewCtrl.dismiss().then(function () {
            _this.app.getRootNav().push('SettingPage');
        });
    };
    PopoverPage.prototype.hideIt = function () {
        this.viewCtrl.dismiss('hideKutipan');
    };
    return PopoverPage;
}());
PopoverPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-popover',
        templateUrl: 'popover.html',
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        AlertController,
        ModalController,
        ViewController,
        App])
], PopoverPage);
export { PopoverPage };
//# sourceMappingURL=popover.js.map