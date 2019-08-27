import { Query, DataSnapshot, Reference } from '@firebase/database-types';

export default class Database {
  static snap(snapshot: DataSnapshot, callback: Function, Model: any): any {
    if (snapshot.exists()) {
      if (Model) callback(new Model(snapshot.val()));
      else callback(snapshot.val());
    }
  }

  static onFeed(ref: Query, callback: Function, Model: any) {
    const feed = ref.on('value', (snapshot: DataSnapshot) => {
      Database.snap(snapshot, callback, Model);
    });
    return {
      off: () => {
        ref.off('value', feed);
      },
    };
  }

  static onAddOrChangeFeed(ref: Query, callback: Function, Model: any) {
    const onEvent = (snapshot: DataSnapshot) => {
      Database.snap(snapshot, callback, Model);
    };
    const addFeed = ref.on('child_added', onEvent);
    const changeFeed = ref.on('child_changed', onEvent);
    return {
      off: () => {
        ref.off('child_added', addFeed);
        ref.off('child_changed', changeFeed);
      },
    };
  }

  static onRemoveFeed(ref: Query, callback: Function, Model: any) {
    const removeFeed = ref.on('child_removed', (snapshot: DataSnapshot) => {
      Database.snap(snapshot, callback, Model);
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
