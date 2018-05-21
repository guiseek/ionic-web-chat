import { RoomsPage } from './../rooms/rooms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = new FormGroup({
    nickname: new FormControl()
  });
  constructor(public navCtrl: NavController, public navParams: NavParams) { }
  enter() {
    window.localStorage.setItem('user',this.user.get('nickname').value);
    this.navCtrl.setRoot(RoomsPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
}
