var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalRangePage } from './modal-range';
var ModalRangePageModule = (function () {
    function ModalRangePageModule() {
    }
    return ModalRangePageModule;
}());
ModalRangePageModule = __decorate([
    NgModule({
        declarations: [
            ModalRangePage,
        ],
        imports: [
            IonicPageModule.forChild(ModalRangePage),
        ],
        exports: [
            ModalRangePage
        ]
    })
], ModalRangePageModule);
export { ModalRangePageModule };
//# sourceMappingURL=modal-range.module.js.map