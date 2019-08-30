import { Reference } from '@firebase/database-types';
import { Game, GameType } from 'betfluent-models';
import { Database } from 'firebase';


export default class GameEntity extends Game {
  private _ref: Reference;

  constructor(game: GameType) {
    super(game);
    this._ref = Database.reference(`${this.league.toLowerCase()}/games/${this.id}`);
  }
}
