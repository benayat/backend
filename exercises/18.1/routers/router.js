const express = require('express');
require('../db/mongoose');
const Product = require('../model/product');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.post('/products', (req, res) => {
  const products = req.body;
  for (let product of products) {
    product = new Product(product);
    product
      .save()
      .then(() => {
        res.send(product);
      })
      .catch((error) => {
        console.log(error);
      });
  }
});
app.get('/products', async (req, res) => {
  try {
    console.log('');
    const products = await Product.find({});
    res.send(products);
  } catch (e) {
    res.status('404').send(e);
  }
});
app.get('/products/active', async (req, res) => {
  try {
    console.log('get query for active products');
    const activeProducts = await Product.find({ isActice: true });
    console.log(activeProducts);
    res.send(activeProducts);
  } catch (e) {
    res.status('404').send(e);
  }
});

app.get('/products/range', async (req, res) => {
  try {
    console.log('now on range query');
    const { min, max } = req.query;
    console.log(min, max);
    const products = await Product.find({
      'details.price': { $gte: min, $lte: max },
    });
    console.log(products);
    res.send(products);
  } catch (error) {
    res.status(404).send(error);
  }
});

app.get('/products/:id', async (req, res, next) => {
  try {
    console.log('get query by id');
    console.log(req.params);
    const product = await Product.findById(req.params.id);
    res.send(product);
  } catch (e) {
    res.status('404').send(e);
  }
});

app.listen(port, () => {
  console.log('server is up on 3000');
});
