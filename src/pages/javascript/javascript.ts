import { FbProvider } from './../../providers/fb/fb';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the JavascriptPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-javascript',
  templateUrl: 'javascript.html',
})
export class JavascriptPage {
  messages: Observable<any>;
  user: any;
  constructor(public fbProvider: FbProvider) {
    this.user = window.localStorage.getItem('user');
  }
  ionViewDidLoad() {
    this.messages = this.fbProvider.getList('javascript').valueChanges();
  }
  send(message) {
    this.fbProvider.addItem('javascript', message);
  }
}
