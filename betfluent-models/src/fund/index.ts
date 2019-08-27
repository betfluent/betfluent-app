import Manager from '../manager';
import { FirebaseCollection } from '../firebase-collection';

export type FundType = {
  amountReturned: number;
  amountWagered: number;
  balance: number;
  closedTimeMillis: number;
  closingTime: number;
  counterBalance: number;
  createdTimeMillis: number;
  fadeAmountWagered: number;
  fadePlayerCount: number;
  fadeResults?: FirebaseCollection<number>;
  fadeReturned: number;
  fadeWagers?: FirebaseCollection<number>;
  games?: FirebaseCollection<string>;
  id: string;
  league: string;
  managerId: string;
  maxBalance: number;
  maxInvestment: number;
  minInvestment: number;
  name: string;
  openTimeMillis: number;
  pctOfFeeCommission: number;
  percentFee: number;
  playerCount: number;
  results?: FirebaseCollection<number>;
  returnCount: number;
  returnTimeMillis: number;
  sport: string;
  status: string;
  type: string;
  wagers?: FirebaseCollection<number>;
};

export default class Fund {
  public amountReturned: number;

  public amountWagered: number;

  public balance: number;

  public closedTimeMillis: number;

  public closingTime: number;

  public counterBalance: number;

  public createdTimeMillis: number;

  public fadeAmountWagered: number;

  public fadePlayerCount: number;

  public fadeResults?: Map<string, number>;

  public fadeReturned: number;

  public fadeWagers?: Map<string, number>;

  public games?: Map<string, string>;

  public id: string;

  public league: string;

  public managerId: string;

  public maxBalance: number;

  public maxInvestment: number;

  public minInvestment: number;

  public name: string;

  public openTimeMillis: number;

  public pctOfFeeCommission: number;

  public percentFee: number;

  public playerCount: number;

  public results?: Map<string, number>;

  public returnCount: number;

  public returnTimeMillis: number;

  public sport: string;

  public status: string;

  public type: string;

  public wagers?: Map<string, number>;

  public manager: any;

  constructor({
    amountReturned = 0,
    amountWagered = 0,
    balance = 0,
    closedTimeMillis,
    closingTime,
    counterBalance = 0,
    createdTimeMillis,
    fadeAmountWagered,
    fadePlayerCount = 0,
    fadeResults,
    fadeReturned = 0,
    fadeWagers,
    games,
    id,
    league,
    managerId,
    maxBalance,
    maxInvestment,
    minInvestment,
    name,
    openTimeMillis,
    pctOfFeeCommission,
    percentFee = 0,
    playerCount = 0,
    results,
    returnCount = 0,
    returnTimeMillis,
    sport,
    status,
    type,
    wagers,
  }: FundType,
  manager: Manager) {
    this.amountReturned = amountReturned;
    this.amountWagered = amountWagered;
    this.balance = balance;
    this.closedTimeMillis = closedTimeMillis;
    this.closingTime = closingTime;
    this.counterBalance = counterBalance;
    this.createdTimeMillis = createdTimeMillis;
    this.fadeAmountWagered = fadeAmountWagered;
    this.fadePlayerCount = fadePlayerCount;
    this.fadeResults = new Map(Object.keys(fadeResults).map(k => [k, fadeResults[k]]));
    this.fadeReturned = fadeReturned;
    this.fadeWagers = new Map(Object.keys(fadeWagers).map(k => [k, fadeWagers[k]]));
    this.games = new Map(Object.keys(games).map(k => [k, games[k]]));
    this.id = id;
    this.league = league;
    this.manager = manager;
    this.managerId = managerId;
    this.maxBalance = maxBalance;
    this.maxInvestment = maxInvestment;
    this.minInvestment = minInvestment;
    this.name = name;
    this.openTimeMillis = openTimeMillis;
    this.pctOfFeeCommission = pctOfFeeCommission;
    this.percentFee = percentFee;
    this.playerCount = playerCount;
    this.results = new Map(Object.keys(results).map(k => [k, results[k]]));
    this.returnCount = returnCount;
    this.returnTimeMillis = returnTimeMillis;
    this.sport = sport;
    this.status = status;
    this.type = type;
    this.wagers = new Map(Object.keys(wagers).map(k => [k, wagers[k]]));
  }
}
