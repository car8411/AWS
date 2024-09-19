import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import AboutPage from './pages/AboutPages'; 
import ContactPage from './pages/ContactPages'; 
import HomePage from './pages/HomePages';
import ProductDetail from './pages/ProductDetail';
/*import PayPalCheckout from './components/PayPalCheckout'; // PayPal 관련 코드 분리*/
import './App.css';

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
            <Route path="/product" element={<ProductDetail />} />
          </Routes>
          <h1>sssssssss
          </h1>
        </div>
        <Footer />
      </div>
    </Router>
  );      
}

export default App;