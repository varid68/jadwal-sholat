import { Directive, ElementRef, Renderer } from '@angular/core';
import { DomController, ViewController } from 'ionic-angular';

/**
 * Generated class for the DragDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({
  selector: '[drag]' // Attribute selector
})

export class DragDirective {

  constructor(public element: ElementRef, public renderer: Renderer, public domCtrl: DomController, public viewCtrl: ViewController) {}

  ngAfterViewInit(){
  	let modal = document.getElementsByTagName('ion-modal')[0];
  	this.renderer.setElementStyle(modal, 'top', 270+'px');

  	let hammer = new window['Hammer'](this.element.nativeElement);
  	hammer.get('pan').set({direction: window['Hammer'].DIRECTION_ALL});

  	hammer.on('pan', (ev) => {
  		this.handlePan(ev);
  	})
  }

  handlePan(ev){
  	var newTop: any = ev.center.y - 20 ;
  	if (newTop < 25)	newTop = 25;
  	else if (newTop > 550) this.viewCtrl.dismiss();

    if (newTop < 550){
    	this.domCtrl.write(() => {
    		let modal = document.getElementsByTagName('ion-modal')[0];
    		this.renderer.setElementStyle(modal, 'top', newTop +'px');
    	});
    }
  }

}
