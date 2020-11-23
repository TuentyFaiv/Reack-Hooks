import React from 'react';
import { Link } from 'react-router-dom';
import { getAppContext } from '../context/AppContext';

import "../styles/components/Header.scss";

const Header = () => {
  const { state: { cart } } = getAppContext();

  return (
    <header className="Header">
      <h1 className="Header-title">
        <Link to="/">
          Platzi Conf Merch
        </Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-cart" />
        </Link>
        {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
      </div>
    </header>
  );
};

export default Header;
