import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OneSignal } from '@ionic-native/onesignal';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'HomePage';
  pages: Array<{title: string, image: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public oneSignal: OneSignal) {
    this.initializeApp();
    
    this.pages = [
      {title: 'Zakat', image: './assets/img/ic_menu_zakat.png'},
      {title: 'hijri Kalendar', image: './assets/img/ic_menu_hijri.png'},
      {title: "Daily Du'a", image: './assets/img/ic_menu_dua.png'},
      {title: "Qur'an", image: './assets/img/ic_menu_quran.png'}
    ];
  }

  initializeApp(){
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      // Transparent status bar for android
      // #AARRGGBB where AA is an alpha value
      if (this.platform.is('cordova')) {
        this.statusBar.backgroundColorByHexString("#33000000");

        this.oneSignal.startInit('09e41b21-988e-4d24-ada0-847d0dc18497', '826487777854');
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
        this.oneSignal.handleNotificationReceived().subscribe(() => {
        // do something when notification is received
          console.log('sukses');
        });

        this.oneSignal.handleNotificationOpened().subscribe(() => {
          console.log('sukses2');
        });

        this.oneSignal.endInit();
      }

      this.splashScreen.hide();
    });
  }

}

