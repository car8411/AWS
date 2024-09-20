// components/Popup.js
import React from 'react';
import './Popup.css'; // Add your popup styles here

const Popup = ({ trigger, setTrigger }) => {
  return (trigger) ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => setTrigger(false)}>Close</button>
        <h2>Popup Content</h2>
        <p>Include any content you want here, like forms or product info.</p>
      </div>
    </div>
  ) : "";
};

export default Popup;
