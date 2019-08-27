import { FirebaseCollection } from '../firebase-collection';
import Manager from '../manager';

export type UserType = {
  approved: boolean;
  balance: number;
  email: string;
  id: number;
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

export type PublicUser = {
  id: string
  joinTimeMillis: number
  name: string
};

export type Preferences = {
  receiveBetEmail: boolean
  receiveReturnEmail: boolean
};

export default class User {
  public approved: boolean;

  public balance: number;

  public email: string;

  public id: number;

  public investments?: Map<string, number>;

  public joinDate: number;

  public lastNotificationCheck: number;

  public managerId?: string;

  public name: string;

  public pin: string;

  public preferences: Preferences;

  public publicId: string;

  public returns?: Map<string, number>;

  public publicUser: PublicUser;

  public manager?: Manager;

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
    publicUser: PublicUser,
    manager?: Manager,
  ) {
    this.approved = approved;
    this.balance = balance;
    this.email = email;
    this.id = id;
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
    if (publicUser) this.publicUser = publicUser;
    if (manager) this.manager = manager;
  }
}
