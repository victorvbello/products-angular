import express from 'express';
import cors from 'cors';
import AuthMiddleware from './middleware/auth';
import { Error, Info } from './utils/log';
import ProductDao from './productDao';

const app = express();

app.use(cors());

app.get('/products', AuthMiddleware, async (req, res) => {
  Info('---------------------------------------------------');
  Info('Request - productList', 'init');
  const list = await ProductDao.all();
  res.json(list || []);
});

app.get('/product/:sku', AuthMiddleware, async (req, res) => {
  Info('---------------------------------------------------');
  Info('Request - product', 'init');
  const { sku } = req.params;
  Info('Request - product', 'params', { sku });
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
  Info('Server', 'app listening on port 3000!');
});
