import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { HtmlPage } from './html';

@NgModule({
  declarations: [
    HtmlPage,
  ],
  imports: [
    IonicModule,
    ComponentsModule,
    IonicPageModule.forChild(HtmlPage),
  ],
})
export class HtmlPageModule {}
