import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class FbProvider {
  constructor(public afs: AngularFirestore) { }
  getList(document) {
    return this.afs.collection(document, ref => {
      return ref.orderBy('timestamp', 'desc');
    });
  }
  addItem(document, item: any) {
    item.timestamp = new Date();
    return this.afs.collection(document).add(item);
  }
}
