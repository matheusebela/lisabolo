import React from 'react';
import ProductListNative from './ProductList.native';

const products = require('./data/products.json');

const ProductList = () => {
  return (
    <ProductListNative />
  );
};

export default ProductList;
