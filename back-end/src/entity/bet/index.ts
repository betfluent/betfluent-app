import { Reference } from '@firebase/database-types';
import { admin } from '../../firebase';

export default class Bet {
  private _id: string;

  private _ref: Reference;

  private _obj: any;

  constructor(bet: any) {
    if (bet.id) this._id = bet.id;
    else this._id = admin.database().ref('wagers').push().key;
    this._ref = admin.database().ref('wagers').child(this._id);
    this._obj = bet;
  }

  public stage() {
    this._ref.set({ ...this._obj, id: this._id });
  }

  public return() {

  }
}
