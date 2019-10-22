import Redis from 'redis';
import { Error, Info } from '../utils/log';
import { REDIS_CONFIG } from '../utils/constants';

export const getClient = async () => {
  const client = Redis.createClient(REDIS_CONFIG.port, REDIS_CONFIG.host);
  return new Promise((resolve, reject) => {
    try {
      client.on('connect', () => {
        Info('Redis - client', 'connected');
        client.auth(REDIS_CONFIG.password, (err, _reply) => {
          if (err) {
            reject(err);
          }
          resolve(client);
        });
      });
      client.on('error', reject);
    } catch (error) {
      reject(error);
    }
  }).catch(e => {
    Error('Redis - client', e.message);
  });
};

export const save = async (key, data) => {
  Info('Redis - save', 'init');
  const client = await getClient();
  return new Promise((resolve, reject) => {
    try {
      if (!client) reject(new Error('not client'));
      client.set(key, data, 'EX', 120, (error, reply) => {
        if (error) {
          Error('Redis - save', error.message);
          reject(error);
        }
        Info('Redis - save', 'success');
        resolve(reply);
      });
    } catch (error) {
      reject(error);
    }
  }).catch(e => {
    Error('Redis - save', e.message);
  });
};

export const get = async key => {
  Info('Redis - get', 'init');
  const client = await getClient();
  return new Promise((resolve, reject) => {
    try {
      if (!client) reject(new Error('not client'));
      client.get(key, (error, reply) => {
        if (error) {
          Error('Redis - get', error.message);
          reject(error);
        }
        Info('Redis - get', 'success');
        resolve(reply);
      });
    } catch (error) {
      reject(error);
    }
  }).catch(e => {
    Error('Redis - get', e.message);
  });
};
