var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, Renderer } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
import { Storage } from '@ionic/storage';
import { RestApiProvider } from '../../providers/rest-api/rest-api';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { Subject } from 'rxjs/Subject';
/**
 * Generated class for the CariLokasiPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CariLokasiPage = (function () {
    function CariLokasiPage(navCtrl, toastCtrl, restApi, elementRef, renderer, storage, keyboard) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.restApi = restApi;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.storage = storage;
        this.keyboard = keyboard;
        this.searchTermStream = new Subject();
    }
    CariLokasiPage.prototype.search = function (term) { this.searchTermStream.next(term); };
    CariLokasiPage.prototype.ngOnInit = function () {
        var _this = this;
        this.items = this.searchTermStream
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(function (term) { return _this.restApi.search(term); });
    };
    CariLokasiPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setTimeout(function () {
            var element = _this.elementRef.nativeElement.querySelector('input');
            _this.renderer.invokeElementMethod(element, 'focus', []);
            _this.keyboard.show();
        }, 500);
    };
    CariLokasiPage.prototype.selectCity = function (item) {
        var _this = this;
        var a = item.terms[1].value;
        var b = a.split(" ");
        var City = {
            desc: item.description,
            city: b[1]
        };
        this.getStorage().then(function (val) {
            if (val == null) {
                _this.storage.set('city', JSON.stringify([City])).then(function () { return _this.navCtrl.pop(); });
            }
            else {
                var hasil = JSON.parse(val);
                var jumlah_1 = 0;
                hasil.forEach(function (arr, index) {
                    if (arr.desc == item.description) {
                        _this.presentToast();
                        jumlah_1++;
                    }
                });
                if (jumlah_1 == 0) {
                    hasil.push(City);
                    _this.storage.set('city', JSON.stringify(hasil)).then(function () { return _this.navCtrl.pop(); });
                }
            }
        });
    };
    CariLokasiPage.prototype.getStorage = function () {
        return this.storage.get('city');
    };
    CariLokasiPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Kota yang kamu pilih sudah tersimpan',
            showCloseButton: true,
            closeButtonText: 'OK'
        });
        toast.present();
    };
    CariLokasiPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    return CariLokasiPage;
}());
CariLokasiPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-cari-lokasi',
        templateUrl: 'cari-lokasi.html',
    }),
    __metadata("design:paramtypes", [NavController,
        ToastController,
        RestApiProvider,
        ElementRef,
        Renderer,
        Storage,
        Keyboard])
], CariLokasiPage);
export { CariLokasiPage };
//# sourceMappingURL=cari-lokasi.js.map