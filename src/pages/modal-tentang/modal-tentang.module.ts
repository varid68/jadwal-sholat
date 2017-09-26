import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalTentangPage } from './modal-tentang';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    ModalTentangPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalTentangPage),DirectivesModule
  ],
  exports: [
    ModalTentangPage
  ]
})
export class ModalTentangPageModule {}
