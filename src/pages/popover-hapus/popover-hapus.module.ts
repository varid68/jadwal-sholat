import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopoverHapusPage } from './popover-hapus';

@NgModule({
  declarations: [
    PopoverHapusPage,
  ],
  imports: [
    IonicPageModule.forChild(PopoverHapusPage),
  ],
  exports: [
    PopoverHapusPage
  ]
})
export class PopoverHapusPageModule {}
