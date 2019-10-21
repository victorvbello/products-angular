import firebaseAdmin from 'firebase-admin';
import { FIREBASE_AUTH } from '../utils/constants';

export default firebaseAdmin.initializeApp({ ...FIREBASE_AUTH });
