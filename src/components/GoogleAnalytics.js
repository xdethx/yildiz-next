import React, { useEffect } from 'react'

// components/GoogleAnalytics.js

export default function GoogleAnalytics() {
    
    // Ensure Google Analytics is initialized only on the client-side
    useEffect(() => {
      if (typeof window !== "undefined") {
        "use strict";
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag("js", new Date());
  
        gtag("config", "G-BB274J0KBG"); 
      }
    }, []);
  
    return null;
  }