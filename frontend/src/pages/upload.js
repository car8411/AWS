// pages/UploadPage.js
import React, { useState } from 'react';


function Upload() {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the product upload logic here, e.g., send to backend
    console.log(product);
  };

  return (
    <div className="upload-page">
      <h2>Upload a Product</h2>
      <form onSubmit={handleSubmit}>
        <label>Product Name:</label>
        <input 
          type="text" 
          value={product.name} 
          onChange={(e) => setProduct({ ...product, name: e.target.value })} 
          required 
        />
        <label>Price:</label>
        <input 
          type="number" 
          value={product.price} 
          onChange={(e) => setProduct({ ...product, price: e.target.value })} 
          required 
        />
        <label>Description:</label>
        <textarea 
          value={product.description} 
          onChange={(e) => setProduct({ ...product, description: e.target.value })} 
          required 
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Upload;
