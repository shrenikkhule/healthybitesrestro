import React from 'react';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-green-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to HealthyBites</h1>
          <p className="text-xl text-green-100 mb-8">
            Delicious, healthy meals delivered to your doorstep
          </p>
          <a
            href="#menu"
            className="inline-block bg-white text-green-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Order Now
          </a>
        </div>
      </section>

      {/* Menu Section */}
      <div id="menu">
        {/* Menu component will be rendered here via routing */}
      </div>
    </>
  );
};

export default Home;