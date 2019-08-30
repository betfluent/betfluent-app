import EventEmitter from 'events';
import { FundType, Fund } from 'betfluent-models';

class FundEventsHandler extends EventEmitter {
  public closeFund(id: string, FundEntity: Fund) {
    this.emit(`${id}_close`, FundEntity);
  }

  public onFundClose(id: string, callback: (Fund: FundType) => void) {
    return this.on(`${id}_close`, callback);
  }

  public returnFund(id: string, FundEntity: Fund) {
    this.emit(`${id}_return`, FundEntity);
  }

  public onFundReturn(id: string, callback: (Fund: FundType) => void) {
    return this.on(`${id}_return`, callback);
  }
}

const FundEvents = new FundEventsHandler();

export default FundEvents;
