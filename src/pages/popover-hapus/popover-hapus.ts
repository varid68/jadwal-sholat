import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';

/**
 * Generated class for the PopoverHapusPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-popover-hapus',
  templateUrl: 'popover-hapus.html',
})
export class PopoverHapusPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {}

  dismiss(){
  	this.viewCtrl.dismiss();
  }
}
