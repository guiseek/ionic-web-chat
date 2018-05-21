import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JavascriptPage } from './javascript';

@NgModule({
  declarations: [
    JavascriptPage,
  ],
  imports: [
    IonicPageModule.forChild(JavascriptPage),
  ],
})
export class JavascriptPageModule {}
