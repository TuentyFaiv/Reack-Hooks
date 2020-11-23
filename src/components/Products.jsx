import React from 'react';
import { getAppContext } from '../context/AppContext';

import "../styles/components/Products.scss";

import Product from "./Product";

const Products = () => {
  const { state: { products }, addToCart } = getAppContext();

  const handleAddToCart = (product) => () => {
    addToCart(product);
  };

  return (
    <div className="Products">
      <div className="Products-items">
        {
          products.map(product => (
            <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />
          ))
        }
      </div>
    </div>
  );
}

export default Products;