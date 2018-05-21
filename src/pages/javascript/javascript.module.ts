import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { JavascriptPage } from './javascript';

@NgModule({
  declarations: [
    JavascriptPage,
  ],
  imports: [
    IonicModule,
    ComponentsModule,
    IonicPageModule.forChild(JavascriptPage),
  ],
})
export class JavascriptPageModule {}
