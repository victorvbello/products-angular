import { get as redisGet, save as redisSave } from './redis';
import { Error, Info } from '../utils/log';
import { processProduct, processProductList } from '../utils/transforms';

const ProductRedis = {
  save: async product => {
    const { uniqueID } = product;
    if (!uniqueID) {
      Error('ProductRedis - save', 'invalid uniqueID', { uniqueID });
      return false;
    }
    const result = await redisSave(
      uniqueID,
      JSON.stringify(processProduct(product)),
    );
    return result === 'OK';
  },
  saveMany: async products => {
    if (!products.length > 0) {
      Error('ProductRedis - saveMany', 'product list empty', {
        total: products.length,
      });
      return false;
    }
    const result = await redisSave(
      'product-list',
      JSON.stringify(processProductList(products)),
    );
    return result === 'OK';
  },
  all: async () => {
    Info('ProductRedis - all', 'init');
    const list = await redisGet('product-list');
    return JSON.parse(list || '[]');
  },
  findBySKU: async sku => {
    Info('ProductRedis - findBySKU', 'init');
    const item = await redisGet(sku.toString());
    return JSON.parse(item || '{}');
  },
};

export default ProductRedis;
