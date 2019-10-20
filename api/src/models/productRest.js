import axios from 'axios';
import { Error, Log, Info } from '../utils/log';
import partNumbers from '../utils/partNumbers';

const ProductRest = {
  all: async () => {
    Info('ProductRest - all', 'init');
    try {
      const productRequest = await axios.get(
        'https://simple.ripley.cl/api/v2/products',
        {
          params: {
            partNumbers: partNumbers.join(','),
            format: 'json',
          },
        },
      );
      const { data } = productRequest;
      Log('ProductRest - all', 'get list success', data);
      return data;
    } catch (error) {
      Error('ProductRest - all', error.message);
      return [];
    }
  },
  findBySKU: async sku => {
    Info('ProductRest - findBySKU', 'init');
    try {
      const productRequest = await axios.get(
        `https://simple.ripley.cl/api/v2/products/${sku}`,
      );
      const { data } = productRequest;
      Log('ProductRest - findBySKU', 'get item success', data);
      return data;
    } catch (error) {
      Error('ProductRest - findBySKU', error.message);
      return {};
    }
  },
};

export default ProductRest;
