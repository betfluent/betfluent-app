import { Reference } from '@firebase/database-types';
import {
  Fund,
  FundType,
  FundDetails,
  GameType,
  BetType,
} from 'betfluent-models';
import { Database } from 'firebase';
import GameEvents from 'watcher/game/events';
import BetEvents from 'watcher/bet/events';
import FundEvents from './events';

export default class FundEntity extends Fund {
  private _ref: Reference;

  constructor(fund: FundType) {
    super(fund);
    this._ref = Database.reference(`funds/${this.id}`);
    this.watchGames();
    BetEvents.onBetPlaced(this.id, this.onBetPlaced);
    BetEvents.onBetResult(this.id, this.onBetResult);
  }

  private async watchGames() {
    const ref = Database.reference(`fundDetails/${this.id}`);
    const fundDetails = await Database.get(ref, FundDetails) as FundDetails;
    fundDetails.potentialGames.forEach((league: string, gameId: string) => {
      GameEvents.onGameStart(league, gameId, this.onGameStart);
    });
  }

  private onBetPlaced(bet: BetType) {
    const ref = bet.fade ? 'fadeWagers' : 'wagers';
    this._ref.child(ref).child(bet.id).set(bet.wagered);
  }

  private onBetResult(bet: BetType) {
    const ref = bet.fade ? 'fadeResults' : 'results';
    this._ref.child(ref).child(bet.id).set(bet.wagered);
  }

  private onGameStart(game: GameType) {
    if (this.status !== 'PENDING') {
      this.status = 'PENDING';
      FundEvents.closeFund(this.id, this);
    }
    this._ref.child('games').child(game.id).set(game.league);
  }
}
