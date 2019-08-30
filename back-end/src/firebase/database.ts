import { Query, DataSnapshot, Reference } from '@firebase/database-types';
import firebase from './firebase-admin';

export enum QueryType {
  Order = 'ORDER',
  OrderStart='ORDER_START'
}

export type QueryParams = {
  type: QueryType.Order | QueryType.OrderStart
  ref: string
  key: string
  value: string | number | boolean
};

export default class Database {
  static query(params: QueryParams) {
    const { ref, key, value } = params;
    switch (params.type) {
      case (QueryType.Order): {
        return firebase.database().ref(ref).orderByChild(key).equalTo(value);
      }
      case (QueryType.OrderStart): {
        return firebase.database().ref(ref).orderByChild(key).startAt(value);
      }
      default:
        return firebase.database().ref(ref).orderByChild(key).equalTo(value);
    }
  }

  static reference(ref: string) {
    return firebase.database().ref(ref);
  }

  static async get(ref: Reference, Model: any) {
    const snapshot = await ref.once('value');
    if (Model) return new Model(snapshot.val());
    return snapshot.val();
  }

  static onFeed(ref: Reference, callback: Function, Model: any) {
    const feed = ref.on('value', (snapshot: DataSnapshot) => {
      if (snapshot.exists()) {
        const obj = snapshot.val();
        const arr = Object.keys(obj).map((key: any) => {
          if (Model) return new Model(obj[key]);
          return obj[key];
        });
        callback(arr);
      }
    });
    return {
      off: () => {
        ref.off('value', feed);
      },
    };
  }

  static onAddKey(ref: Query, callback: Function) {
    const onEvent = (snapshot: DataSnapshot) => {
      if (snapshot.exists()) {
        callback(snapshot.key);
      }
    };
    const addKey = ref.on('child_added', onEvent);
    return {
      off: () => {
        ref.off('child_added', addKey);
      },
    };
  }

  static onAddFeed(ref: Query, callback: Function, Model: any) {
    const onEvent = (snapshot: DataSnapshot) => {
      if (snapshot.exists()) {
        if (Model) callback(new Model(snapshot.val()));
        else callback(snapshot.val());
      }
    };
    const addFeed = ref.on('child_added', onEvent);
    return {
      off: () => {
        ref.off('child_added', addFeed);
      },
    };
  }

  static onRemoveFeed(ref: Query, callback: Function, Model: any) {
    const removeFeed = ref.on('child_removed', (snapshot: DataSnapshot) => {
      if (snapshot.exists()) {
        if (Model) callback(new Model(snapshot.val()));
        else callback(snapshot.val());
      }
    });
    return {
      off: () => {
        ref.off('child_removed', removeFeed);
      },
    };
  }

  static async transact(ref: Reference, validation: (a: any) => any): Promise<any> {
    return ref.transaction(validation);
  }
}
