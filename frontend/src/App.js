import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import AboutPage from './pages/AboutPage'; 
import ContactPage from './pages/ContactPage'; 
import HomePage from './pages/HomePage';
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
            {/* ProductDetail 페이지에서만 PayPal 결제 기능 노출 */}
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );      
}

export default App;