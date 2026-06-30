import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useCart } from '../../context/CartContext';

const CartButton = ({ onClick }) => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <button
      onClick={onClick}
      className="relative p-2 text-gray-700 hover:text-green-600 transition-colors"
      title="Open cart"
    >
      <AiOutlineShoppingCart size={28} />
      {totalItems > 0 && (
        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
          {totalItems > 99 ? '99+' : totalItems}
        </span>
      )}
    </button>
  );
};

export default CartButton;