"use client";

import { useEffect } from 'react';
import Script from 'next/script';

const CalendlyButton = ({ className, children }) => {
  useEffect(() => {
    if (window.Calendly) {
      window.Calendly.initBadgeWidget({
        url: 'https://calendly.com/pro-webcoder/30min',
        text: 'Book an Appointment',
        color: '#000000',
        textColor: '#ffffff',
        branding: false
      });
    }
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/pro-webcoder/30min' });
    }
  };

  return (
    <>
      <Script 
        src="https://assets.calendly.com/assets/external/widget.js" 
        strategy="lazyOnload"
      />
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      
      <button
        className={className}
        onClick={handleClick}
      >
        {children}
      </button>
    </>
  );
};

export default CalendlyButton;
