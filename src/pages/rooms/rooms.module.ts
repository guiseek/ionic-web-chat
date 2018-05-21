import { JavascriptPageModule } from './../javascript/javascript.module';
import { CssPageModule } from './../css/css.module';
import { HtmlPageModule } from './../html/html.module';
import { ComponentsModule } from './../../components/components.module';
import { RoomMessagesComponent } from './../../components/room-messages/room-messages';
import { RoomMessageComponent } from './../../components/room-message/room-message';
import { FbProvider } from './../../providers/fb/fb';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RoomsPage } from './rooms';
import { RoomMessageUploadComponent } from '../../components/room-message-upload/room-message-upload';

@NgModule({
  declarations: [
    RoomsPage,
  ],
  imports: [
    ComponentsModule,
    HtmlPageModule,
    CssPageModule,
    JavascriptPageModule,
    IonicPageModule.forChild(RoomsPage),
  ],
  entryComponents: [
    RoomMessageComponent,
    RoomMessagesComponent,
    RoomMessageUploadComponent
  ],
  providers: [
    FbProvider
  ]
})
export class RoomsPageModule {}
