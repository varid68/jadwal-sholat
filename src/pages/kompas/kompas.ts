import { Component } from '@angular/core';
import { IonicPage, Platform } from 'ionic-angular';
import { DeviceOrientation, DeviceOrientationCompassHeading } from '@ionic-native/device-orientation';

/**
 * Generated class for the KompasPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-kompas',
  templateUrl: 'kompas.html',
})
export class KompasPage {
  position: any;

  constructor(
    public platform: Platform,
    public deviceOr: DeviceOrientation) {
  }

  ionViewDidEnter(){
    if (this.platform.is('cordova')){
  		// Watch the device compass heading change
      this.deviceOr.watchHeading().subscribe(
    		(data: DeviceOrientationCompassHeading) => this.position = data.magneticHeading
  		);
    }
	}

}
