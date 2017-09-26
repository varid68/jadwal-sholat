import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the PopupModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-popup-modal',
  templateUrl: 'popup-modal.html',
})
export class PopupModalPage {
	id: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {}

  ionViewWillEnter() {
    this.id = this.navParams.get('id');
  }

  dismiss(){
  	this.viewCtrl.dismiss();
  }

}
