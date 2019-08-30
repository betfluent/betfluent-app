import EventEmitter from 'events';
import { BetType } from 'betfluent-models';

class BetEventsHandler extends EventEmitter {
  public placeBet(fundId: string, Bet: BetType) {
    this.emit(`${fundId}_place`, Bet);
  }

  public onBetPlaced(fundId: string, callback: (Bet: BetType) => void) {
    return this.on(`${fundId}_place`, callback);
  }

  public resultBet(fundId: string, Bet: BetType) {
    this.emit(`${fundId}_result`, Bet);
  }

  public onBetResult(fundId: string, callback: (Bet: BetType) => void) {
    return this.on(`${fundId}_result`, callback);
  }
}

const BetEvents = new BetEventsHandler();

export default BetEvents;
