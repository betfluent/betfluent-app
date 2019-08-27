import { Reference } from '@firebase/database-types';
import { admin } from '../../firebase';

export default class User {
  private _id: string;

  private _ref: Reference;

  private _obj: any;

  constructor(user: any) {
    if (user.id) this._id = user.id;
    else this._id = admin.database().ref('users').push().key;
    this._ref = admin.database().ref('users').child(this._id);
    this._obj = user;
  }
}
