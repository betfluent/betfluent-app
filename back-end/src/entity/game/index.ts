import { Reference } from '@firebase/database-types';
import { admin } from '../../firebase';

export default class Game {
  private _id: string;

  private _ref: Reference;

  private _obj: any;

  constructor(league: string, game: any) {
    if (game.id) this._id = game.id;
    else this._id = admin.database().ref(`${league.toLowerCase()}/games`).push().key;
    this._ref = admin.database().ref(`${league.toLowerCase()}/games`).child(this._id);
    this._obj = game;
  }
}
