import { Component, Renderer, ElementRef } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';

/**
 * Generated class for the KoreksiPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-koreksi',
  templateUrl: 'koreksi.html',
})
export class KoreksiPage {
	subuh: number= 0;
	dzuhur: number= 0;
	ashar: number= 0;
	maghrib: number= 0;
	isya: number= 0;

  constructor(
    public navCtrl: NavController, 
    public modalCtrl: ModalController,
    public renderer: Renderer,
    public elementRef: ElementRef) {
  }

  openModal(solat){
  	let modal = this.modalCtrl.create('ModalRangePage',{
  		id: solat
  	});
  	modal.present();

    setTimeout(() => {
      let element = document.getElementsByTagName('ion-modal')[0];
      this.renderer.setElementStyle(element,'padding-top', 66 +'vw');
      this.renderer.setElementStyle(element,'padding-bottom', 66 +'vw');
      this.renderer.setElementStyle(element,'padding-left', 2 +'vh');
      this.renderer.setElementStyle(element,'padding-right', 2 +'vh');
    },100);

  	modal.onDidDismiss((data) => {
  		if (data !== undefined){
  			switch (data.id) {
  				case 'Subuh': this.subuh = data.range;
  					break;
  				case 'Dzuhur': this.dzuhur = data.range;
  					break;
  				case 'Ashar': this.ashar = data.range;
  					break;
  				case 'Maghrib': this.maghrib = data.range;
  					break;
  				default:this.isya = data.range;
  					break;
  			}
  		}
  	});
  }

  back(){
  	this.navCtrl.pop();
  }

}
