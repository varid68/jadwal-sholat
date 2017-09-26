import { Component, Renderer, ElementRef } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';

/**
 * Generated class for the SettingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  vh: number;

  constructor(
  	public navCtrl: NavController, 
  	public modalCtrl: ModalController,
  	public renderer: Renderer,
  	public elementRef: ElementRef) {
  }


  openModal(text){
  	let modal = this.modalCtrl.create('PopupModalPage',{
  		id: text
  	});
  	modal.present();
  	switch (text) {
  		case "volume": this.vh = 31;
  			break;
  		case "bahasa": this.vh = 20;
  			break;
  		case "nama": this.vh = 27;
  			break;
  		case "metode": this.vh = 7;
  			break;
  		default: this.vh = 33;
  			break;
  	}
  	
  	setTimeout(() => {
  		let element = document.getElementsByTagName('ion-modal')[0];
  		this.renderer.setElementStyle(element,'padding-top', this.vh +'vh');
  		this.renderer.setElementStyle(element,'padding-bottom', this.vh +'vh');
  		this.renderer.setElementStyle(element,'padding-left', 10 +'vw');
  		this.renderer.setElementStyle(element,'padding-right', 10 +'vw');
  	},100);
  }

  toKoreksi(){
  	this.navCtrl.push('KoreksiPage');
  }

  back(){
    this.navCtrl.pop();
  }
}