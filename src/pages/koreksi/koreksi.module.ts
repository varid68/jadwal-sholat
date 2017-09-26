import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KoreksiPage } from './koreksi';

@NgModule({
  declarations: [
    KoreksiPage,
  ],
  imports: [
    IonicPageModule.forChild(KoreksiPage),
  ],
  exports: [
    KoreksiPage
  ]
})
export class KoreksiPageModule {}
