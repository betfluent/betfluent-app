import { admin, Database } from '../firebase';
import Fund from '../entity/fund';
import Bet from '../entity/bet';

export default class Watcher {
  private _db: admin.database.Database;

  private _openFunds: Map<string, Fund> = new Map();

  private _pendingFunds: Map<string, Fund> = new Map();

  private _bets: Map<string, Fund> = new Map();

  constructor() {
    this._db = admin.database();
    Database.onAddOrChangeFeed(this._db.ref('funds').orderByChild('status').equalTo('OPEN'), this.watchOpenFunds, Fund);
    Database.onAddOrChangeFeed(this._db.ref('funds').orderByChild('status').equalTo('PENDING'), this.watchPendingFunds, Fund);
    Database.onAddOrChangeFeed(this._db.ref('wagers').orderByChild('status').orderByChild('STAGED'), this.watchStagedBets, Bet);
  }

  private watchOpenFunds(fund: Fund) {

  }

  private watchPendingFunds(fund: Fund) {

  }

  private watchStagedBets(bet: Bet) {

  }
}
