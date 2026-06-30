import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartButton from '../Cart/CartButton';
import CartSidebar from '../Cart/CartSidebar';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-3xl">🥗</span>
            <div>
              <h1 className="text-2xl font-bold text-green-600">HealthyBites</h1>
              <p className="text-xs text-gray-600">Fresh & Healthy</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Menu
            </Link>
            <Link
              to="/order-tracking"
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Track Order
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              About
            </Link>
          </nav>

          {/* Right Section - Cart Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <CartButton onClick={() => setIsCartOpen(true)} />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded transition-colors"
            >
              {isMobileMenuOpen ? (
                <AiOutlineClose size={24} />
              ) : (
                <AiOutlineMenu size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden border-t border-gray-200 py-4 px-4 bg-gray-50">
            <Link
              to="/"
              className="block py-2 text-gray-700 hover:text-green-600 transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Menu
            </Link>
            <Link
              to="/order-tracking"
              className="block py-2 text-gray-700 hover:text-green-600 transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Track Order
            </Link>
            <Link
              to="/about"
              className="block py-2 text-gray-700 hover:text-green-600 transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
          </nav>
        )}
      </header>

      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;