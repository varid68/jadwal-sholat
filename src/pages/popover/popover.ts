import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ViewController, ModalController, App, Events } from 'ionic-angular';

/**
 * Generated class for the PopoverPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {
  posisiPopup: string;

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams, 
  	public alertCtrl: AlertController,
    public modalCtrl: ModalController, 
  	public viewCtrl: ViewController,
    public app: App,
    public events: Events) {
  }

  ionViewWillEnter() {
    this.posisiPopup = this.navParams.get('openPopup');
  }

  //
  openModalTentang(){
    let modal = this.modalCtrl.create('ModalTentangPage');
    this.viewCtrl.dismiss().then(() => {
      modal.present();
    })
  }

  //
  openModalLokasi(){
    let modal = this.modalCtrl.create('LokasiPage');
    this.viewCtrl.dismiss('hai').then(() => {
      modal.present();
    })

    modal.onDidDismiss((data) => {
      let callback = {
        marker: 'ok',
        data: data
      }
      this.events.publish('dismiss', callback);
    })
  }

  presentAlert(text) {
    let Text = text != 'iklan' ? 'telah memberikan aplikasi ini 5 bintang' : 'iklan berhasil dihilangkan';
  	
  	let alert = this.alertCtrl.create({
    title: 'Terima Kasih',
    message: Text,
    buttons: [{
        text: 'OK',
        role: 'cancel'
      }]
  	});

    this.viewCtrl.dismiss().then(() => {
      alert.present();
    })
  }

  toPage() {
    this.viewCtrl.dismiss().then(() => {
      this.app.getActiveNavs('n4')[0].push('SettingPage');
    });
  }

  hideIt(){
    this.viewCtrl.dismiss('hideKutipan');
  }

}
