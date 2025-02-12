import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-gray-700 mb-4">
          Welcome to our website! We are dedicated to providing the best service possible. Our team is passionate and committed to excellence.
        </p>
        <p className="text-gray-700">
          Our mission is to deliver high-quality products that bring value to our customers. Thank you for choosing us!
        </p>
      </div>
    </div>
  );
};

export default About;