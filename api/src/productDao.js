import { ProductRedis, ProductRest } from './models';
import { processProduct, processProductList } from './utils/transforms';

const ProductDao = {
  all: async () => {
    const redisList = await ProductRedis.all();
    const restList = await ProductRest.all();
    const List = redisList.length > 0 ? redisList : restList;
    return List.length > 0 ? processProductList(List) : [];
  },
  findBySKU: async sku => {
    const itemRedis = await ProductRedis.findBySKU(sku);
    const itemRest = await ProductRest.findBySKU(sku);
    const product = 'uniqueID' in itemRedis ? itemRedis : itemRest;
    return 'uniqueID' in product ? processProduct(product) : {};
  },
};

export default ProductDao;
