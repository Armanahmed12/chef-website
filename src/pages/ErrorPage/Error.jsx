import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-center">
          <FaExclamationTriangle className="text-6xl text-yellow-500 mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-2">404 - Page Not Found</h1>
          <p className="text-lg text-gray-700">We apologize, but it seems that the page you are looking for cannot be found.</p>
        </div>
      </div>
    );
};

export default Error;