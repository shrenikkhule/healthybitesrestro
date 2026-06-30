import React, { useState } from 'react';
import MenuCard from './MenuCard';
import MenuFilter from './MenuFilter';
import { menuData, categories } from '../../data/menuData';

const MenuSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredMenu = selectedCategory === 'All'
    ? menuData
    : menuData.filter((item) => item.category === selectedCategory);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Our Menu</h2>
          <p className="text-gray-600 text-lg">Healthy & Delicious Options for You</p>
        </div>

        {/* Filter */}
        <MenuFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Menu Grid */}
        {filteredMenu.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredMenu.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No items found in this category</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;