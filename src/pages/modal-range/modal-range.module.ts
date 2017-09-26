import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalRangePage } from './modal-range';

@NgModule({
  declarations: [
    ModalRangePage,
  ],
  imports: [
    IonicPageModule.forChild(ModalRangePage),
  ],
  exports: [
    ModalRangePage
  ]
})
export class ModalRangePageModule {}
