import { Component, Renderer } from '@angular/core';
import { IonicPage, NavController, PopoverController, ViewController, App } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the LokasiPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-lokasi',
  templateUrl: 'lokasi.html',
})
export class LokasiPage {
	kosong: boolean= true;
  city: any;

  constructor(
    public navCtrl: NavController, 
    public popoverCtrl: PopoverController, 
    public viewCtrl: ViewController,
    public app: App,
    public renderer: Renderer,
    public storage: Storage) {}


  ngOnInit(){
    let modal = document.getElementsByTagName('ion-modal')[0];
    this.renderer.setElementStyle(modal, 'margin-top', 25 + 'px');
  }

  ionViewWillEnter(){
    this.city = this.getStorage()
    this.storage.get('city').then((e) => {
      this.kosong = e != null ? false : true
    })
  }

  async getStorage(){
    let result = await this.storage.get('city');
    return JSON.parse(result);
  }

  back(){
    this.navCtrl.pop();
  }

  toCariPage(){
    this.app.getActiveNavs('n4')[0].push('CariLokasiPage');
  }

  openPopup(myEvent, Item){
    let popover = this.popoverCtrl.create('PopoverHapusPage')
    popover.present({
      ev: myEvent
    })
    popover.onDidDismiss(() => this.remove(Item));
  }

  remove(item){
    this.getStorage().then((val) => {
      if (val.length == 1){
        this.storage.remove('city').then(() => {
          this.city = null;
          this.kosong = true
        });
      } else {
        val.forEach((arr,index) => {
          if (arr.desc == item.desc){
            val.splice(index,1);
            this.storage.set('city',JSON.stringify(val)).then(() => this.city = this.getStorage());
          }
        });
      }
    });
  }

  dismiss(item){
    setTimeout(() => {
      this.viewCtrl.dismiss(item);  
    },600);
  }

}
