import React from 'react';

const AboutUs = () => {
  return (
    <div style={{border: '2px solid red'}} className="max-w-md mx-2 md:mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl md:mt-16 mt-4 py-4 px-2 md:px-8">
      <div className="md:flex text-lg">
        <div className="md:flex-shrink-0 md:pr-8">
          <img className="h-auto mt-8 rounded-md w-full object-cover md:w-48" src="https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2023/10/beacon_restaurants-2.jpg" alt="American Restaurant" />
        </div>
        <div className=" mt-3 text-justify">
          <div className="uppercase  text-2xl text-indigo-500 font-semibold">American Diner</div>
          <p className="mt-2 text-gray-500 font-semibold">Welcome to our classic American diner! Enjoy our delicious burgers, fries, and milkshakes in a cozy retro atmosphere.</p>
          <div className="mt-4 font-bold">
            <span className="text-gray-500">Address:</span>
            <span className="ml-2">456 Oak Street, New York City, USA</span>
          </div>
          <div className="mt-2 font-bold">
            <span className="text-gray-500">Phone:</span>
            <span className="ml-2">555-123-4567</span>
          </div>
          <div className="mt-4">
            <button className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Book a table</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
