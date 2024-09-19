import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PayPalCheckout = ({ amount }) => {
  return (
    <PayPalScriptProvider options={{ "client-id": "AZxbEwhej-EjD2ZXf0ZH0DXstykMj04TevpVocuDjCuF5LjXCOpSkRIfD9aBDHIcHvHF4nWMU88Ygmt5" }}>
      <PayPalButtons 
        style={{ layout: 'vertical' }} 
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: amount // 결제할 금액
              }
            }]
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            alert(`Transaction completed by ${details.payer.name.given_name}`);
          });
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalCheckout;
