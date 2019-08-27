import firebase from 'firebase';
import config from './config.json';
import configDev from './config-dev.json';

const configEnv = process.env.BACKEND_ENV === 'debug' || process.env.NODE_ENV === 'development'
  ? configDev
  : config;

firebase.initializeApp(configEnv);

export default firebase;
