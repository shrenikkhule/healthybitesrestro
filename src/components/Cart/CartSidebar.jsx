import React from 'react';
import { AiOutlineClose, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import CartItem from './CartItem';

const CartSidebar = ({ isOpen, onClose }) => {
  const { cart, getTotalPrice, getTotalItems, clearCart } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed right-0 top-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <AiOutlineShoppingCart size={24} className="text-green-500" />
            <h2 className="text-xl font-bold text-gray-800">Cart</h2>
            {getTotalItems() > 0 && (
              <span className="ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                {getTotalItems()}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded transition-colors"
          >
            <AiOutlineClose size={24} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-grow overflow-y-auto p-4">
          {cart.length > 0 ? (
            <div>
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <AiOutlineShoppingCart size={48} className="mb-2 opacity-50" />
              <p>Your cart is empty</p>
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-gray-200 p-4 bg-gray-50">
            <div className="flex justify-between mb-4">
              <span className="font-semibold text-gray-800">Subtotal:</span>
              <span className="font-bold text-lg text-green-600">
                ${getTotalPrice().toFixed(2)}
              </span>
            </div>
            <Link
              to="/checkout"
              onClick={onClose}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-colors mb-2 inline-block text-center"
            >
              Proceed to Checkout
            </Link>
            <button
              onClick={() => {
                clearCart();
                onClose();
              }}
              className="w-full border border-gray-300 text-gray-700 hover:bg-gray-100 font-semibold py-2 rounded-lg transition-colors"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;