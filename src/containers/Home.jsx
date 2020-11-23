import React from 'react';

import initialState from '../intialState';

import Products from "../components/Products";

const Home = () => {
  return (
    <Products products={initialState.products} />
  );
};

export default Home;
