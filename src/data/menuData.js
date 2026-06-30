// Menu items database
export const menuData = [
  {
    id: 1,
    name: 'Grilled Chicken Salad',
    category: 'Salads',
    price: 8.99,
    description: 'Fresh greens with grilled chicken, vegetables, and light vinaigrette',
    image: '/images/chicken-salad.jpg',
    calories: 280,
    vegetarian: false,
    vegan: false
  },
  {
    id: 2,
    name: 'Caesar Salad',
    category: 'Salads',
    price: 7.99,
    description: 'Crisp romaine lettuce with parmesan cheese and Caesar dressing',
    image: '/images/caesar-salad.jpg',
    calories: 320,
    vegetarian: true,
    vegan: false
  },
  {
    id: 3,
    name: 'Grilled Salmon',
    category: 'Main Course',
    price: 14.99,
    description: 'Fresh grilled salmon with lemon butter sauce, served with vegetables',
    image: '/images/salmon.jpg',
    calories: 450,
    vegetarian: false,
    vegan: false
  },
  {
    id: 4,
    name: 'Veggie Burger',
    category: 'Main Course',
    price: 9.99,
    description: 'Plant-based burger with avocado, tomato, and special sauce',
    image: '/images/veggie-burger.jpg',
    calories: 380,
    vegetarian: true,
    vegan: true
  },
  {
    id: 5,
    name: 'Grilled Chicken Breast',
    category: 'Main Course',
    price: 12.99,
    description: 'Lean grilled chicken with herbs, served with quinoa and steamed broccoli',
    image: '/images/chicken-breast.jpg',
    calories: 350,
    vegetarian: false,
    vegan: false
  },
  {
    id: 6,
    name: 'Smoothie Bowl',
    category: 'Breakfast',
    price: 8.49,
    description: 'Acai smoothie bowl topped with granola, berries, and coconut',
    image: '/images/smoothie-bowl.jpg',
    calories: 280,
    vegetarian: true,
    vegan: true
  },
  {
    id: 7,
    name: 'Grilled Vegetables',
    category: 'Sides',
    price: 4.99,
    description: 'Seasonal grilled vegetables with olive oil and herbs',
    image: '/images/grilled-veggies.jpg',
    calories: 120,
    vegetarian: true,
    vegan: true
  },
  {
    id: 8,
    name: 'Quinoa Bowl',
    category: 'Sides',
    price: 5.99,
    description: 'Fluffy quinoa with roasted vegetables and tahini dressing',
    image: '/images/quinoa-bowl.jpg',
    calories: 240,
    vegetarian: true,
    vegan: true
  }
];

export const categories = [
  'All',
  'Salads',
  'Main Course',
  'Breakfast',
  'Sides'
];