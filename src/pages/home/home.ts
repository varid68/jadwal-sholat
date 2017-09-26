import { Component, Renderer, ElementRef } from '@angular/core';
import { IonicPage, NavController, PopoverController, ToastController, ModalController, Events } from 'ionic-angular';

import { RestApiProvider } from '../../providers/rest-api/rest-api';
import { Storage } from '@ionic/storage';

import { Jadwal, Notif } from './jadwal';
import { JadwalBesok, NotifBesok } from './jadwal-besok';

import { Observable } from 'rxjs/Rx';
import * as hijri from 'moment-hijri';
import * as moment from 'moment';
import 'moment/locale/id';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  hari: string;
  tanggal: string;
  tanggalHijri: string;
  besok: string;
  tanggalBesok: any;
  tanggalHijriBesok: string;
  jadwal: Jadwal= {};
  notif: Notif= {};
  jadwalBesok: JadwalBesok= {};
  notifBesok: NotifBesok= {};
  stillLoading: boolean= true;
  hideIt: boolean= false;
  selisih: {value: string}= {value:''};
  waktuSalat: string;
  cityDesc: string= 'Kecamatan Bangsri, Kabupaten Jepara, Jawa Tengah, Indonesia';

  constructor(
    public navCtrl: NavController,
    public popoverCtrl: PopoverController,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController,
    public storage: Storage,
    public events: Events,
    public renderer: Renderer,
    public element: ElementRef,
    public restApi: RestApiProvider) {}

  ionViewWillLoad(){    
    this.getCurrentDate();
    this.getTime(null);
  }


  // menampilkan tanggal hijri dan masehi
  getCurrentDate(){
    this.tanggal = moment().format('LL');
    this.hari = moment().format('dddd');

    this.tanggalBesok = moment().add(1,'days').format('LL');
    this.besok = moment().add(1,'days').format('dddd');

    let bulanHijri = ['a','Muharram','Safar','Rabiul awal','Rabiul akhir','Jumadil awal',
    'Jumadil akhir','Rajab',"Sya'ban",'Ramadhan','Syawal',"Dzulka'dah",'Dzulhijjah'];

    // ubah tanggal ke hijriah
    let a = hijri(moment().format('YYYY-MM-DD'), 'YYYY-MM-DD').format('iDD iMM iYYYY');
    this.tanggalHijri = a.replace(a.substring(3,5),`${bulanHijri[a.substring(3,5)]}`);

    let b = hijri(moment().add(1,'days').format('YYYY-MM-DD'), 'YYYY-M-D').format('iDD iMM iYYYY');
    this.tanggalHijriBesok = b.replace(b.substring(3,5),`${bulanHijri[b.substring(3,5)]}`);
  }

  // mengambil waktu solat untuk har ini dan besok
  getTime(Lokasi){
    let lokasi = Lokasi == null ? 'jepara' : Lokasi;
    this.restApi.getTime(lokasi).subscribe((res) => {
      this.stillLoading = false;
      this.jadwal.Subuh = this.convertHour(res.items[0].fajr);
      this.jadwal.Terbit = this.convertHour(res.items[0].shurooq);
      this.jadwal.Dzuhur = this.convertHour(res.items[0].dhuhr);
      this.jadwal.Ashar = this.convertHour(res.items[0].asr);
      this.jadwal.Maghrib = this.convertHour(res.items[0].maghrib);
      this.jadwal.Isya = this.convertHour(res.items[0].isha);
    },(err) => {
      this.presentToast();
    });
    let besok = moment().add(1,'days').format('D-M-YYYY');
    this.restApi.getTimeTomorrow(lokasi,besok).subscribe((res) => {
      this.stillLoading = false;
      this.jadwalBesok.subuh = this.convertHour(res.items[0].fajr);
      this.jadwalBesok.terbit = this.convertHour(res.items[0].shurooq);
      this.jadwalBesok.dzuhur = this.convertHour(res.items[0].dhuhr);
      this.jadwalBesok.ashar = this.convertHour(res.items[0].asr);
      this.jadwalBesok.maghrib = this.convertHour(res.items[0].maghrib);
      this.jadwalBesok.isya = this.convertHour(res.items[0].isha);
      let timer = Observable.timer(0,20000);
      timer.subscribe(() => {
        this.getDiffHours();
      })
    })
  }

  // menghitung perbedaan jam
  getDiffHours(){
    let jadwal = this.jadwal;
    for (let i in jadwal){
      let element = this.element.nativeElement.getElementsByClassName(`${i}`);
      this.renderer.setElementStyle(element[0], 'color', 'black');
      this.renderer.setElementStyle(element[1], 'color', 'black')
    }
    
    let jumlahFalse = 0;
    for (let i in jadwal) {
      let selisih = moment(jadwal[i], 'H:mma').isBefore();
      if (!selisih){
        let endTime = moment(jadwal[i], "HH:mm");
        let duration = moment.duration(endTime.diff(moment()));
        
        this.selisih.value = setSelisih(duration);
        let element = this.element.nativeElement.getElementsByClassName(`${i}`);
        this.renderer.setElementStyle(element[0], 'color','#D50000');
        this.renderer.setElementStyle(element[1], 'color','#D50000');

        this.waktuSalat = `${element[0].innerText} ${element[1].innerText}`;
        jumlahFalse++;
        break;
      }
    }

    if (jumlahFalse != 1){
      let Now = moment().format("YYYY-MM-DD HH:mm");
      let now = moment(Now, 'YYYY-MM-DD HH:mm');
      let Tomorrow = moment().add(1,"days").format("YYYY-MM-DD") + ' ' + this.jadwalBesok.subuh;
      let tomorrow = moment(Tomorrow, 'YYYY-MM-DD HH:mm');

      let duration = moment.duration(tomorrow.diff(now));
      this.selisih.value = setSelisih(duration);
      this.waktuSalat = `Shubuh ${this.jadwalBesok.subuh}`;
    }

    function setSelisih(duration){
      let hours = Math.floor(duration.asHours());
      let minutes = Math.floor(duration.asMinutes()) - hours*60;
      let result = `${hours} jam ${minutes} menit lagi`;

      return result;
    }
  }

  // menampilkan toast jika gagal mengambil data
  presentToast(){
    let toast = this.toastCtrl.create({
      message: 'Gagal ambil data',
      showCloseButton: true,
      duration: 5000,
      closeButtonText:'Reload'
    });
    toast.present();

    toast.onDidDismiss((data, role) => {
      if (role == 'close') this.getTime(null);
    });
  }

  // konversi 12 jam ke 24 jam
  convertHour(time){
    let hours = Number(time.match(/^(\d+)/)[1]);
    let minutes = Number(time.match(/:(\d+)/)[1]);
    let AMPM = time.match(/\s(.*)$/)[1];
    if (AMPM == "pm" && hours < 12) hours = hours + 12;
    // if (AMPM == "pm" && hours == 12) hours = hours - 12;
    let sHours = hours.toString();
    let sMinutes = minutes.toString();
    if (hours < 10) sHours = "0" + sHours;
    if (minutes < 10) sMinutes = "0" + sMinutes;
    let result = sHours + ":" + sMinutes;
    return result;
  }

  //
  openPopup(myEvent,posisi) {
  	let popover = this.popoverCtrl.create('PopoverPage',{
      openPopup: posisi
    });
  	popover.present({
  		ev: myEvent
  	});
    popover.onDidDismiss((data) => {
      this.events.subscribe('dismiss', angka => {
        if (angka.data != undefined){
          this.stillLoading = true;
          this.jadwal = {};
          this.waktuSalat = null;
          this.selisih = {value: null};
          this.getTime(angka.data.city);
          this.cityDesc = angka.data.desc;
          this.events.unsubscribe('dismiss')
        }        
      })

      if (data == 'hideKutipan') this.hideIt = true;
    });
  }

  // ke halaman kompas
  toKompasPage(){
  	this.navCtrl.push('KompasPage');
  }

  // ke halaman notifikasi
  toNotifPage(){
    let modal = this.modalCtrl.create('NotifPage');
    modal.present();

    modal.onDidDismiss((data) => {
      console.log(data);
    })
  }

}
