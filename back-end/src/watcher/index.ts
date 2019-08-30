import { Database, QueryType } from 'firebase';
import Fund from './fund';
import Bet from './bet';
import Game from './game';

const leagues = ['mlb', 'nba'];

export default class Watcher {
  private _activeFunds: Map<string, Fund> = new Map();

  private _bets: Map<string, Bet> = new Map();

  private _games: Map<string, Game> = new Map();

  constructor() {
    Database.onAddFeed(Database.query({
      type: QueryType.Order, ref: 'funds', key: 'returnTimeMillis', value: -1,
    }), this.watchActiveFunds, Fund);
    Database.onAddFeed(Database.query({
      type: QueryType.Order, ref: 'wagers', key: 'returned', value: -1,
    }), this.watchActiveBets, Bet);
    leagues.forEach((league: string): void => {
      Database.onAddKey(Database.query({
        type: QueryType.OrderStart, ref: `${league}/games`, key: 'completedTimeMillis', value: null,
      }), this.watchActiveGames);
    });
  }

  private watchActiveFunds(fund: Fund) {
    this._activeFunds.set(fund.id, fund);
  }

  private watchActiveBets(bet: Bet) {
    this._bets.set(bet.id, bet);
  }

  private watchActiveGames(game: Game) {
    this._games.set(`${game.league}_${game.id}`, game);
  }
}
