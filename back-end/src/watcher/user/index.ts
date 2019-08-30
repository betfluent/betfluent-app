import { User, UserType } from 'betfluent-models';
import { Reference } from '@firebase/database-types';
import { Database } from 'firebase';

export default class UserEntity extends User {
  private _ref: Reference;

  constructor(user: UserType) {
    super(user);
    this._ref = Database.reference(`users/${this.id}`);
  }
}
