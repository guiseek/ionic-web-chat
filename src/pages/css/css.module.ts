import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { CssPage } from './css';

@NgModule({
  declarations: [
    CssPage,
  ],
  imports: [
    IonicModule,
    ComponentsModule,
    IonicPageModule.forChild(CssPage),
  ],
})
export class CssPageModule {}
