var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Renderer } from '@angular/core';
import { IonicPage, NavController, PopoverController, ToastController } from 'ionic-angular';
import { RestApiProvider } from '../../providers/rest-api/rest-api';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Rx';
import * as hijri from 'moment-hijri';
import * as moment from 'moment';
import 'moment/locale/id';
var HomePage = (function () {
    function HomePage(navCtrl, popoverCtrl, toastCtrl, storage, renderer, restApi) {
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.renderer = renderer;
        this.restApi = restApi;
        this.jadwal = {};
        this.notif = {};
        this.jadwalBesok = {};
        this.notifBesok = {};
        this.stillLoading = true;
        this.hideIt = false;
    }
    HomePage.prototype.ionViewWillLoad = function () {
        this.getCurrentDate();
        this.getTime(null);
    };
    HomePage.prototype.getTime = function (Lokasi) {
        var _this = this;
        var lokasi = Lokasi == null ? 'jepara' : Lokasi;
        this.restApi.getTime(lokasi).subscribe(function (res) {
            _this.stillLoading = false;
            _this.jadwal.Subuh = _this.convertHour(res.items[0].fajr);
            _this.jadwal.Terbit = _this.convertHour(res.items[0].shurooq);
            _this.jadwal.Dzuhur = _this.convertHour(res.items[0].dhuhr);
            _this.jadwal.Ashar = _this.convertHour(res.items[0].asr);
            _this.jadwal.Maghrib = _this.convertHour(res.items[0].maghrib);
            _this.jadwal.Isya = _this.convertHour(res.items[0].isha);
            var timer = Observable.timer(0, 20000);
            timer.subscribe(function () {
                _this.getDiffHours();
            });
        }, function (err) {
            _this.presentToast();
        });
        var date = moment().add(1, 'days').format('D-M-YYYY');
        this.restApi.getTimeTomorrow(lokasi, date).subscribe(function (res) {
            _this.stillLoading = false;
            _this.jadwalBesok.subuh = _this.convertHour(res.items[0].fajr);
            _this.jadwalBesok.terbit = _this.convertHour(res.items[0].shurooq);
            _this.jadwalBesok.dzuhur = _this.convertHour(res.items[0].dhuhr);
            _this.jadwalBesok.ashar = _this.convertHour(res.items[0].asr);
            _this.jadwalBesok.maghrib = _this.convertHour(res.items[0].maghrib);
            _this.jadwalBesok.isya = _this.convertHour(res.items[0].isha);
        });
    };
    HomePage.prototype.presentToast = function () {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: 'Gagal ambil data',
            showCloseButton: true,
            closeButtonText: 'Reload'
        });
        toast.present();
        toast.onDidDismiss(function (ev) { return _this.getTime(null); });
    };
    HomePage.prototype.getDiffHours = function () {
        var jadwal = this.jadwal;
        for (var i in jadwal) {
            var selisih = moment(jadwal[i], 'H:mma').isBefore();
            if (!selisih) {
                var endTime = moment(jadwal[i], "HH:mm");
                var duration = moment.duration(endTime.diff(moment()));
                var hours = Math.floor(duration.asHours());
                var minutes = Math.floor(duration.asMinutes()) - hours * 60;
                var result = hours + ' jam ' + minutes + ' menit';
                this.selisih = i + " " + result;
                var element = document.getElementsByClassName("" + i);
                this.renderer.setElementStyle(element[0], 'color', '#D50000');
                this.renderer.setElementStyle(element[1], 'color', '#D50000');
                break;
            }
        }
    };
    HomePage.prototype.convertHour = function (time) {
        var hours = Number(time.match(/^(\d+)/)[1]);
        var minutes = Number(time.match(/:(\d+)/)[1]);
        var AMPM = time.match(/\s(.*)$/)[1];
        if (AMPM == "pm" && hours < 12)
            hours = hours + 12;
        if (AMPM == "pm" && hours == 12)
            hours = hours - 12;
        var sHours = hours.toString();
        var sMinutes = minutes.toString();
        if (hours < 10)
            sHours = "0" + sHours;
        if (minutes < 10)
            sMinutes = "0" + sMinutes;
        var result = sHours + ":" + sMinutes;
        return result;
    };
    HomePage.prototype.openPopup = function (myEvent, posisi) {
        var _this = this;
        var popover = this.popoverCtrl.create('PopoverPage', {
            openPopup: posisi
        });
        popover.present({
            ev: myEvent
        });
        popover.onDidDismiss(function (data) {
            if (data == 'hideKutipan')
                _this.hideIt = true;
            if (data != null) {
                if (data.marker == 'ok' && data.city != undefined) {
                    _this.stillLoading = true;
                    _this.jadwal = {};
                    _this.getTime(data.city);
                }
            }
        });
    };
    // ke halaman kompas
    HomePage.prototype.toKompasPage = function () {
        this.navCtrl.push('KompasPage');
    };
    // menampilkan tanggal hijri dan masehi
    HomePage.prototype.getCurrentDate = function () {
        this.tanggal = moment().format('LL');
        this.hari = moment().format('dddd');
        this.tanggalBesok = moment().add(1, 'days').format('LL');
        this.besok = moment().add(1, 'days').format('dddd');
        var bulanHijri = ['a', 'Muharram', 'Safar', 'Rabiul awal', 'Rabiul akhir', 'Jumadil awal',
            'Jumadil akhir', 'Rajab', "Sya'ban", 'Ramadhan', 'Syawal', "Dzulka'dah", 'Dzulhijjah'];
        // ubah tanggal ke hijriah
        var a = hijri(moment().format('YYYY-MM-DD'), 'YYYY-MM-DD').format('iDD iMM iYYYY');
        this.tanggalHijri = a.replace(a.substring(3, 5), "" + bulanHijri[a.substring(3, 5)]);
        var b = hijri(moment().add(1, 'days').format('YYYY-MM-DD'), 'YYYY-M-D').format('iDD iMM iYYYY');
        this.tanggalHijriBesok = b.replace(b.substring(3, 5), "" + bulanHijri[b.substring(3, 5)]);
    };
    return HomePage;
}());
HomePage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-home',
        templateUrl: 'home.html'
    }),
    __metadata("design:paramtypes", [NavController,
        PopoverController,
        ToastController,
        Storage,
        Renderer,
        RestApiProvider])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.js.map