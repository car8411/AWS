import React, { useState }  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import AboutPage from './pages/AboutPages'; 
import ContactPage from './pages/ContactPages'; 
import HomePage from './pages/HomePages';
import ProductDetail from './pages/ProductDetail';
/*import PayPalCheckout from './components/PayPalCheckout'; // PayPal 관련 코드 분리*/
import './App.css';
import UploadPage from "./pages/UploadPage";
import Navbar from './components/Navbar';
import LocationPage from './pages/LocationPage';
import Popup from './components/Popup';

function App() {

  const [popupTrigger, setPopupTrigger] = useState(false);

  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/product" element={<ProductDetail />} />
            <Route path="/upload" element={<UploadPage />} />
          <Route path="/locations/:locationId" element={<LocationPage />} />
          </Routes>
          <button onClick={() => setPopupTrigger(true)}>Open Popup</button>
          <Popup trigger={popupTrigger} setTrigger={setPopupTrigger} />
        </div>
        <Footer />
      </div>
    </Router>
  );      
}

export default App;