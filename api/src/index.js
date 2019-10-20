import express from 'express';
import { Error, Info, Log } from './utils/log';
import ProductDao from './productDao';

const app = express();

app.get('/products', async (req, res) => {
  Info('Request - productList', 'init');
  const list = await ProductDao.all();
  res.json(list || []);
});

app.get('/product/:sku', async (req, res) => {
  Info('Request - product', 'init');
  const { sku } = req.params;
  Log('Request - product', 'params', { sku });
  if (!sku) {
    Error('Request - product', 'invalid sku', { sku });
    res.json({ error: 400, message: 'invalid sku' });
    return;
  }
  const product = await ProductDao.findBySKU(sku);
  if (!product) {
    Error('Request - product', 'not fount', { sku });
    res.json({ error: 404, message: 'product not found' });
    return;
  }
  res.json(product);
});

app.listen(3000, () => {
  Log('Server', 'app listening on port 3000!');
});
