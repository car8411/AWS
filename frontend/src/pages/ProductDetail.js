import React from 'react';
import PayPalCheckout from '../components/PayPalCheckout';

const ProductDetail = () => {
  const product = {
    name: "Sample Product",
    price: "19.99"
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <PayPalCheckout amount={product.price} />
    </div>
  );
};

export default ProductDetail;
