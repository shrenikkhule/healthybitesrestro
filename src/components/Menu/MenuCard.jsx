import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { useCart } from '../../context/CartContext';

const MenuCard = ({ item }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(item, 1);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-48 bg-gray-200 overflow-hidden">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-100 to-green-200">
            <span className="text-gray-400 text-4xl">🍽️</span>
          </div>
        )}
        {/* Badges */}
        <div className="absolute top-2 right-2 flex gap-2">
          {item.vegetarian && (
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">Veg</span>
          )}
          {item.vegan && (
            <span className="bg-green-700 text-white text-xs px-2 py-1 rounded">Vegan</span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{item.name}</h3>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{item.description}</p>
        
        {/* Calories */}
        <p className="text-gray-500 text-xs mt-2">🔥 {item.calories} cal</p>

        {/* Price and Button */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-green-600">${item.price.toFixed(2)}</span>
          <button
            onClick={handleAddToCart}
            className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition-colors duration-200 flex items-center justify-center"
            title="Add to cart"
          >
            <AiOutlinePlus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;