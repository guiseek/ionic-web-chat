import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { RoomsPage } from '../pages/rooms/rooms';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = RoomsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      if (window.localStorage.getItem('user')) {
        this.rootPage = RoomsPage;
      } else {
        this.rootPage = 'LoginPage';
      }
    });
  }
}

