import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LokasiPage } from './lokasi';

@NgModule({
  declarations: [
    LokasiPage,
  ],
  imports: [
    IonicPageModule.forChild(LokasiPage),
  ],
  exports: [
    LokasiPage
  ]
})
export class LokasiPageModule {}
