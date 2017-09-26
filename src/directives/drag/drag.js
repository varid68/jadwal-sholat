var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, Renderer } from '@angular/core';
import { DomController } from 'ionic-angular';
/**
 * Generated class for the DragDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
var DragDirective = (function () {
    function DragDirective(element, renderer, domCtrl) {
        this.element = element;
        this.renderer = renderer;
        this.domCtrl = domCtrl;
    }
    DragDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        var modal = document.getElementsByTagName('ion-modal')[0];
        this.renderer.setElementStyle(modal, 'top', 270 + 'px');
        var hammer = new window['Hammer'](this.element.nativeElement);
        hammer.get('pan').set({ direction: window['Hammer'].DIRECTION_ALL });
        hammer.on('pan', function (ev) {
            _this.handlePan(ev);
        });
    };
    DragDirective.prototype.handlePan = function (ev) {
        var _this = this;
        var newTop = ev.center.y - 20;
        if (newTop < 0) {
            var newTop = 0;
        }
        else if (newTop > 500) {
            var newTop = 500;
        }
        this.domCtrl.write(function () {
            var modal = document.getElementsByTagName('ion-modal')[0];
            _this.renderer.setElementStyle(modal, 'top', newTop + 'px');
        });
    };
    return DragDirective;
}());
DragDirective = __decorate([
    Directive({
        selector: '[drag]' // Attribute selector
    }),
    __metadata("design:paramtypes", [ElementRef, Renderer, DomController])
], DragDirective);
export { DragDirective };
//# sourceMappingURL=drag.js.map