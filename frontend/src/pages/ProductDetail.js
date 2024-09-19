import React from 'react';

const ProductDetail = () => {
  const product = {
    name: 'Sample Product',
    price: 19.99,  // USD
    description: 'This is a sample product description.',
    imageUrl: 'https://via.placeholder.com/150',
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.imageUrl} alt={product.name} />
      <p>{product.description}</p>
      <h3>Price: ${product.price}</h3>
    </div>
  );
};

export default ProductDetail;
