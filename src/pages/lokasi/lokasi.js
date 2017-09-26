var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Component } from '@angular/core';
import { IonicPage, NavController, PopoverController, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the LokasiPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LokasiPage = (function () {
    function LokasiPage(navCtrl, popoverCtrl, viewCtrl, storage) {
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.kosong = true;
    }
    LokasiPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.city = this.getStorage();
        this.storage.get('city').then(function (e) {
            _this.kosong = e != null ? false : true;
        });
    };
    LokasiPage.prototype.getStorage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('city')];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, JSON.parse(result)];
                }
            });
        });
    };
    LokasiPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    LokasiPage.prototype.toCariPage = function () {
        this.navCtrl.push('CariLokasiPage');
    };
    LokasiPage.prototype.openPopup = function (myEvent, Item) {
        var _this = this;
        var popover = this.popoverCtrl.create('PopoverHapusPage');
        popover.present({
            ev: myEvent
        });
        popover.onDidDismiss(function () { return _this.remove(Item); });
    };
    LokasiPage.prototype.remove = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var storage, a;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        storage = function () { return _this.storage.get('city'); };
                        return [4 /*yield*/, this.storage.get('city')];
                    case 1:
                        a = _a.sent();
                        console.log(storage());
                        return [2 /*return*/];
                }
            });
        });
    };
    LokasiPage.prototype.dismiss = function (item) {
        this.viewCtrl.dismiss(item);
    };
    return LokasiPage;
}());
LokasiPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-lokasi',
        templateUrl: 'lokasi.html',
    }),
    __metadata("design:paramtypes", [NavController, PopoverController, ViewController, Storage])
], LokasiPage);
export { LokasiPage };
//# sourceMappingURL=lokasi.js.map