import React from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineDelete } from 'react-icons/ai';
import { useCart } from '../../context/CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center gap-4 py-4 border-b border-gray-200 hover:bg-gray-50 px-2 rounded">
      {/* Image */}
      <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-100 to-green-200">
            <span className="text-gray-400 text-2xl">🍽️</span>
          </div>
        )}
      </div>

      {/* Details */}
      <div className="flex-grow">
        <h4 className="font-semibold text-gray-800">{item.name}</h4>
        <p className="text-gray-600 text-sm">${item.price.toFixed(2)} each</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="p-1 hover:bg-gray-200 rounded transition-colors"
          title="Decrease quantity"
        >
          <AiOutlineMinus size={18} />
        </button>
        <span className="w-8 text-center font-semibold">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="p-1 hover:bg-gray-200 rounded transition-colors"
          title="Increase quantity"
        >
          <AiOutlinePlus size={18} />
        </button>
      </div>

      {/* Price */}
      <div className="text-right w-20">
        <p className="font-bold text-gray-800">${(item.price * item.quantity).toFixed(2)}</p>
      </div>

      {/* Delete Button */}
      <button
        onClick={() => removeFromCart(item.id)}
        className="p-2 text-red-500 hover:bg-red-50 rounded transition-colors"
        title="Remove item"
      >
        <AiOutlineDelete size={20} />
      </button>
    </div>
  );
};

export default CartItem;