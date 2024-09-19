// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // 올바른 경로
import Footer from './components/Footer'; // 올바른 경로 // 경로가 정확한지 확인
import AboutPage from './pages/AboutPages'; // 올바른 경로
import ContactPage from './pages/ContactPages'; // 올바른 경로
import HomePage from './pages/HomePages';
import ProductDetail from './pages/ProductDetail';
import './App.css';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <div>
          <PayPalScriptProvider options={{ "client-id": "AZxbEwhej-EjD2ZXf0ZH0DXstykMj04TevpVocuDjCuF5LjXCOpSkRIfD9aBDHIcHvHF4nWMU88Ygmt5" }}>
        <PayPalButtons 
          style={{ layout: 'vertical' }} 
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: '19.99' // 결제할 금액 (USD)
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
          <div>
          <ProductDetail />
          </div>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );      
}

export default App;

/*why*/