import { Reference } from '@firebase/database-types';
import { Bet } from 'betfluent-models';
import { Database } from 'firebase';

export default class BetEntity extends Bet {
  private _ref: Reference;

  constructor(bet: Bet) {
    super(bet);
    this._ref = Database.reference(`wagers/${bet.id}`);
  }
}
