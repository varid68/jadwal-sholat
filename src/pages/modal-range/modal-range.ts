import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalRangePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-modal-range',
  templateUrl: 'modal-range.html',
})
export class ModalRangePage {
	id: string;
	rangeValue: number= 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    this.id = this.navParams.get('id');
  }

  changeMinutes(){
  	let callback = {
  		range: this.rangeValue,
  		id: this.id
  	}
  	this.viewCtrl.dismiss(callback);
  }

  dismiss(){
  	this.viewCtrl.dismiss();
  }
}
