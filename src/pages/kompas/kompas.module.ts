import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KompasPage } from './kompas';

@NgModule({
  declarations: [
    KompasPage,
  ],
  imports: [
    IonicPageModule.forChild(KompasPage),
  ],
  exports: [
    KompasPage
  ]
})
export class KompasPageModule {}
