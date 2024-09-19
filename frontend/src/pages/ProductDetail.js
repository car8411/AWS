import React from 'react';
import PayPalCheckout from '../components/PayPalCheckout';

const ProductDetail = () => {
  return (
    <div>
      <h2>Product Detail</h2>
      <p>여기에 제품 세부 정보를 추가할 수 있습니다.</p>
      <PayPalCheckout/>
    </div>
  );
};

export default ProductDetail;
