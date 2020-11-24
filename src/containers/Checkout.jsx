import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { getAppContext } from '../context/AppContext';
import totalSum from '../utils/totalSum';

import "../styles/containers/Checkout.scss";

const Checkout = () => {
  const { state: { cart }, removeFromCart } = getAppContext();
  const handleRemove = (product) => () => {
    removeFromCart(product);
  };

  return (
    <>
      <Helmet>
        <title>Lista de pedidos - Platzi Conf Merch</title>
      </Helmet>
      <div className="Checkout">
        <div className="Checkout-content">
          <h3>{cart.length > 0 ? <h3>Lista de pedidos</h3> : <h3>Sin pedidos...</h3> }</h3>
          {
            cart.map((item, index) => (
              <div className="Checkout-item" key={index}>
                <div className="Checkout-element">
                <h4>{item.title}</h4>
                <span>${item.price}</span>
                </div>
                <button type="button" onClick={handleRemove(index)}>
                  <i className="fas fa-trash-alt" />
                </button>
              </div>
            ))
          }
        </div>
        {
          cart.length > 0 && (
            <div className="Checkout-sidebar">
              <h3>Precio total: ${totalSum(cart)}</h3>
              <Link to="/checkout/information">
                <button type="button">Continuar pedido</button>
              </Link>
            </div>
          )
        }
      </div>
    </>
  );
};

export default Checkout;
