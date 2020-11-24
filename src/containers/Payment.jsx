import React from 'react';
import { useHistory } from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button';
import { getAppContext } from '../context/AppContext';
import totalSum from '../utils/totalSum';

import "../styles/containers/Payment.scss";

const Payment = () => {
  const { state: { cart, buyer }, addNewOrder } = getAppContext();
  const history = useHistory();

  const paypalOptions = {
    clientId: 'AYwaK3OSkOaiDKmE61d3WQphU5dw09aioFvJuf65ZNfXpZkJbm0ycYlVyaSnOrdVVoGEbHHVjm_CesWf',
    intent: 'capture',
    currency: 'USD'
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  };

  const handlePaymentSuccess = (data) => {
    console.log(data);
    if(data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      };
      addNewOrder(newOrder);
      history.push('/checkout/success');
    }
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {
          cart.map(item => (
            <div className="Payment-item" key={item.title}>
              <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
              </div>
            </div>
          ))
        }
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={totalSum(cart)}
            onPaymentStart={()=> console.log('Start Payment')}
            onPaymentSuccess={data => handlePaymentSuccess(data)}
            onPaymentError={error => console.log(error)}
            onPaymentCancel={data => console.log(data)}
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
