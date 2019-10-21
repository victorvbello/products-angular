import { Error, Info } from '../utils/log';
import firebase from '../models/firebase';

const validateAuth = async (req, res, next) => {
  try {
    const { headers: { authorization } = {} } = req;
    if (!authorization) {
      return res.status(403).send({ message: 'authentication is required' });
    }
    Info('Request - middleware', 'authorization');

    const token = authorization.split(' ')[1];

    Info('Request - middleware', 'token');

    const authData = await firebase.auth().verifyIdToken(token);
    if (!authData) {
      return res.status(401).send({ message: 'invalid authentication' });
    }

    const { name, email } = authData;
    Info('Request - middleware', 'user authenticated', { name, email });

    next();
    return true;
  } catch (err) {
    Error('Request - middleware', err.message);
    return res.status(403).send({ message: 'authentication is required' });
  }
};

export default validateAuth;
