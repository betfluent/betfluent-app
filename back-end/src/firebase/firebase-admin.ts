import admin from 'firebase-admin';
import configDev from './config-dev.json';
import config from './config.json';


const serviceAccount = process.env.BACKEND_ENV === 'debug' || process.env.NODE_ENV === 'development'
  ? JSON.parse(process.env.FIREBASE_DEBUG_SERVICE_ACCT)
  : JSON.parse(process.env.FIREBASE_PRODUCTION_SERVICE_ACCT);

const databaseURL = process.env.BACKEND_ENV === 'debug' || process.env.NODE_ENV === 'development'
  ? configDev.databaseURL
  : config.databaseURL;

const storageBucket = process.env.BACKEND_ENV === 'debug' || process.env.NODE_ENV === 'development'
  ? configDev.storageBucket
  : config.storageBucket;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL,
  storageBucket,
});

export default admin;
