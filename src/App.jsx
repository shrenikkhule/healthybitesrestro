import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import MenuSection from './components/Menu/MenuSection';
import Checkout from './pages/Checkout';
import OrderTracking from './pages/OrderTracking';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          {/* Header with Cart Button */}
          <Header />

          {/* Main Content */}
          <main className="flex-grow">
            <Routes>
              {/* Home Page */}
              <Route
                path="/"
                element={
                  <>
                    <Home />
                    <MenuSection />
                  </>
                }
              />

              {/* Checkout Page */}
              <Route path="/checkout" element={<Checkout />} />

              {/* Order Tracking Page */}
              <Route path="/order-tracking" element={<OrderTracking />} />

              {/* 404 Page */}
              <Route
                path="*"
                element={
                  <div className="flex items-center justify-center min-h-screen">
                    <div className="text-center">
                      <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
                      <p className="text-gray-600 mb-6">Page not found</p>
                      <a
                        href="/"
                        className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                      >
                        Back to Home
                      </a>
                    </div>
                  </div>
                }
              />
            </Routes>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;