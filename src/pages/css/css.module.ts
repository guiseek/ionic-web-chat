import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CssPage } from './css';

@NgModule({
  declarations: [
    CssPage,
  ],
  imports: [
    IonicPageModule.forChild(CssPage),
  ],
})
export class CssPageModule {}
