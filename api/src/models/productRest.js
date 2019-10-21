import axios from 'axios';
import { EXTERNAL_API_PATH } from '../utils/constants';
import { Error as STDOUTError, Info } from '../utils/log';
import partNumbers from '../utils/partNumbers';
import { processProduct, processProductList } from '../utils/transforms';

const mockError = label => {
  const randomValue = Math.round(Math.random() * 99) + 1;
  if (randomValue < 15) {
    Info(`${label} - middleware`, 'mock error random', { randomValue });
    throw new Error('mock error rate of 15%');
  }
};

const all = async () => {
  Info('ProductRest - all', 'init');
  try {
    mockError('ProductRest - all');
    const productRequest = await axios.get(`${EXTERNAL_API_PATH}products`, {
      params: {
        partNumbers: partNumbers.join(','),
        format: 'json',
      },
    });
    const { data } = productRequest;
    Info('ProductRest - all', 'get list success', { total: data.length });
    return processProductList(data);
  } catch (error) {
    STDOUTError('ProductRest - all', error.message);
    return all();
  }
};

const findBySKU = async sku => {
  Info('ProductRest - findBySKU', 'init');
  try {
    mockError('ProductRest - findBySKU');
    const productRequest = await axios.get(
      `${EXTERNAL_API_PATH}products/${sku}`,
    );
    const { data } = productRequest;
    const { uniqueID } = data;
    Info('ProductRest - findBySKU', 'get item success', { uniqueID });
    return processProduct(data);
  } catch (error) {
    STDOUTError('ProductRest - findBySKU', error.message);
    return findBySKU(sku);
  }
};

const ProductRest = {
  all,
  findBySKU,
};

export default ProductRest;
