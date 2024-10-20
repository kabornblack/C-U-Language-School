"use client";

import React, { useState, useEffect } from "react";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-blue-950 text-white p-4 flex justify-between items-center">
      <p className="text-sm mr-4 mb-2 sm:mb-0">
        We use cookies to enhance your experience. By continuing to visit this
        site you agree to our use of cookies.
        <a
          href="/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
          className="underline ml-1 hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
        >
          Privacy Policy
        </a>
      </p>
      <div>
        <button
          onClick={acceptCookies}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Accept
        </button>
        <button
          onClick={declineCookies}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
