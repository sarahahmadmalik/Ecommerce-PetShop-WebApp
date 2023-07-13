import React from 'react';
import '../styles/NotificationCard.css'
const NotificationCard = () => {
  return (
  
    <div className="Notify-card">
      <div className="header">
        <div className="image">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              id="SVGRepo_tracerCarrier"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="1.5"
                stroke="#000000"
                d="M20 7L9.00004 18L3.99994 13"
              ></path>
            </g>
          </svg>
        </div>
        <div className="notify-content">
          <span className="notify-title">Order validated</span>
          <p className="message">
            Thank you for your purchase. Your package will be delivered within 2 days of your purchase.
          </p>
        </div>
      </div>
      <div className="actions">
        <button type="button" className="history">
          Go back to Home
        </button>
      </div>
    </div>
  );
};

export default NotificationCard;
