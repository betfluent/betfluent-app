import { Reference } from '@firebase/database-types';
import { Fund, FundType, Manager } from 'betfluent-models';
import { admin } from '../../firebase';

export default class FundEntity extends Fund {
  private _id: string;

  private _ref: Reference;

  constructor(fund: FundType, manager: Manager) {
    super(fund, manager);
    if (fund.id) this._id = fund.id;
    else this._id = admin.database().ref('funds').push().key;
    this._ref = admin.database().ref('funds').child(this._id);
  }

  public close() {
    this._ref.update({ status: 'CLOSED' });
  }
}
