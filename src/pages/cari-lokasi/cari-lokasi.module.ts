import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CariLokasiPage } from './cari-lokasi';

@NgModule({
  declarations: [
    CariLokasiPage,
  ],
  imports: [
    IonicPageModule.forChild(CariLokasiPage),
  ],
  exports: [
    CariLokasiPage
  ]
})
export class CariLokasiPageModule {}
