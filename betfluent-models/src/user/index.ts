import { FirebaseCollection } from '../firebase-collection';

export type UserType = {
  approved: boolean;
  balance: number;
  email: string;
  id?: string;
  investments?: FirebaseCollection<number>;
  joinDate: number;
  lastNotificationCheck: number;
  managerId?: string;
  name: string;
  pin: string;
  preferences: Preferences;
  publicId: string;
  returns?: FirebaseCollection<number>;
};

export type Preferences = {
  receiveBetEmail: boolean
  receiveReturnEmail: boolean
};

export default class User {
  public approved: boolean;

  public balance: number;

  public email: string;

  public id?: string;

  public investments?: Map<string, number>;

  public joinDate: number;

  public lastNotificationCheck: number;

  public managerId?: string;

  public name: string;

  public pin: string;

  public preferences: Preferences;

  public publicId: string;

  public returns?: Map<string, number>;

  constructor(
    {
      approved,
      balance,
      email,
      id,
      investments,
      joinDate,
      lastNotificationCheck,
      managerId,
      name,
      pin,
      preferences: { receiveBetEmail = true, receiveReturnEmail = true },
      publicId,
      returns,
    }: UserType,
  ) {
    this.approved = approved;
    this.balance = balance;
    this.email = email;
    if (this.id) this.id = id;
    this.investments = new Map(Object.keys(investments).map(k => [k, investments[k]]));
    this.joinDate = joinDate;
    this.lastNotificationCheck = lastNotificationCheck;
    if (managerId) this.managerId = managerId;
    this.name = name;
    this.pin = pin;
    this.preferences = {
      receiveBetEmail,
      receiveReturnEmail,
    };
    this.publicId = publicId;
    this.returns = new Map(Object.keys(returns).map(k => [k, returns[k]]));
  }
}
