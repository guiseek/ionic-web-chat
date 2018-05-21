import { JavascriptPage } from './../javascript/javascript';
import { CssPage } from './../css/css';
import { HtmlPage } from './../html/html';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the RoomsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rooms',
  templateUrl: 'rooms.html'
})
export class RoomsPage {
  user: any;
  htmlRoot = HtmlPage
  cssRoot = CssPage
  javascriptRoot = JavascriptPage
  constructor(public navCtrl: NavController) {}
  ionViewDidLoad() {
    this.user = window.localStorage.getItem('user');
  }
  logout() {
    window.localStorage.removeItem('user');
    this.navCtrl.setRoot('LoginPage');
  }
}
