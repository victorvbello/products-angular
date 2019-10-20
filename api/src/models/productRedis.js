import { Error, Info } from '../utils/log';

const ProductRedis = {
  all: async () => {
    Info('ProductRedis - all', 'init');
    return [];
  },
  findBySKU: async sku => {
    Info('ProductRedis - findBySKU', 'init');
    return {};
  },
};

export default ProductRedis;
