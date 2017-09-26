import { Component, ElementRef, Renderer, OnInit } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
import { Storage } from '@ionic/storage';
import { RestApiProvider } from '../../providers/rest-api/rest-api';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { Subject } from 'rxjs/Subject';

/**
 * Generated class for the CariLokasiPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-cari-lokasi',
  templateUrl: 'cari-lokasi.html',
})
export class CariLokasiPage implements OnInit {
  items: Observable<string[]>;

  constructor(
  	public navCtrl: NavController,
    public toastCtrl: ToastController,
    public restApi: RestApiProvider,
  	public elementRef: ElementRef,
  	public renderer: Renderer,
    public storage: Storage,
  	public keyboard: Keyboard) {
  }

  private searchTermStream = new Subject<string>();
  search(term: string) { this.searchTermStream.next(term); }

  ngOnInit(){
    this.items = this.searchTermStream
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap((term:string) => this.restApi.search(term));
  }

  // set focus input search
  ngAfterViewInit() {
    const element = this.elementRef.nativeElement.querySelector('input');
    
    // we need to delay our call in order to work with ionic ...
    setTimeout(() => {
      this.renderer.invokeElementMethod(element, 'focus', []);
    },500);
  }


  // 
  selectCity(item){
    let a = item.terms[1].value;
    let b = a.split(" ");
    let City = {
      desc: item.description,
      city: b[1]
    };
    this.storage.get('city').then((val) => {
      if (val == null){
        this.storage.set('city',JSON.stringify([City])).then(() => this.navCtrl.pop());
      } else {
        let hasil = JSON.parse(val);
        let jumlah = 0;
        hasil.forEach((arr,index) => {
          if (arr.desc == item.description){
            this.presentToast();
            jumlah++;
          }
        });
        if (jumlah == 0){
          hasil.push(City);
          this.storage.set('city',JSON.stringify(hasil)).then(() => this.navCtrl.pop());
        }
      }
    });
  }

  // menampilkan toast jika kota yang terpilih sudah tersimpan
  presentToast(){
    let toast = this.toastCtrl.create({
      message: 'Kota yang kamu pilih sudah tersimpan',
      showCloseButton: true,
      closeButtonText:'OK'
    });
    toast.present();
  }

  back(){
    this.navCtrl.pop();
  }

}
