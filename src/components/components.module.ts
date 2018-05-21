import { NgModule } from '@angular/core';
import { RoomMessageComponent } from './room-message/room-message';
import { RoomMessagesComponent } from './room-messages/room-messages';
import { RoomMessageUploadComponent } from './room-message-upload/room-message-upload';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [RoomMessageComponent,
    RoomMessagesComponent,
    RoomMessageUploadComponent],
	imports: [IonicModule],
	exports: [RoomMessageComponent,
    RoomMessagesComponent,
    RoomMessageUploadComponent]
})
export class ComponentsModule {}
