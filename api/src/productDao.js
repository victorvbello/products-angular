import { ProductRedis, ProductRest } from './models';

const ProductDao = {
  all: async () => {
    const redisList = await ProductRedis.all();
    const restList = await ProductRest.all();
    const List = redisList.length > 0 ? redisList : restList;
    if (restList.length > 0 && !redisList.length > 0) {
      await ProductRedis.saveMany(restList);
    }
    return List.length > 0 ? List : [];
  },
  findBySKU: async sku => {
    const itemRedis = await ProductRedis.findBySKU(sku);
    const itemRest = await ProductRest.findBySKU(sku);
    const product = 'uniqueID' in itemRedis ? itemRedis : itemRest;
    if ('uniqueID' in itemRest && !('uniqueID' in itemRedis)) {
      await ProductRedis.save(itemRest);
    }
    return 'uniqueID' in product ? product : {};
  },
};

export default ProductDao;
