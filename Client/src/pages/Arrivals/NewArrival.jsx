import React, { useState } from 'react';
import { FiHeart, FiShare2, FiShoppingCart, FiStar } from 'react-icons/fi';
import { FaFilter, FaSearch } from 'react-icons/fa';






import Product1 from '../../assets/lactop.jpg';
import Product2 from '../../assets/lactop2.jpg';
import Product3 from '../../assets/lactop3.jpg';
import Product4 from '../../assets/lactop4.jpg';
import Product5 from '../../assets/lactop5.jpg';
import Product6 from '../../assets/lactop6.jpg';







const NewArrivals = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortOption, setSortOption] = useState('featured');

  // Sample new arrival products data
  const newArrivals = [
    {
      id: 1,
      name: 'Wireless Bluetooth Earbuds',
      price: 2499,
      originalPrice: 2999,
      image: Product1,
      category: 'electronics',
      rating: 4.5,
      reviews: 128,
      isNew: true,
      discount: 17
    },
    {
      id: 2,
      name: 'Smart Watch Pro',
      price: 5499,
      originalPrice: 6999,
      image: Product2,
      category: 'electronics',
      rating: 4.2,
      reviews: 86,
      isNew: true,
      discount: 21
    },
    {
      id: 3,
      name: 'Organic Cotton T-Shirt',
      price: 899,
      originalPrice: 1299,
      image: Product3,
      category: 'fashion',
      rating: 4.0,
      reviews: 45,
      isNew: true,
      discount: 31
    },
    {
      id: 4,
      name: 'Stainless Steel Water Bottle',
      price: 699,
      originalPrice: 999,
      image: Product4,
      category: 'home',
      rating: 4.7,
      reviews: 210,
      isNew: true,
      discount: 30
    },
    {
      id: 5,
      name: 'Wireless Charging Pad',
      price: 1599,
      originalPrice: 1999,
      image: Product5,
      category: 'electronics',
      rating: 4.3,
      reviews: 67,
      isNew: true,
      discount: 20
    },
    {
      id: 6,
      name: 'Handwoven Nepali Dhaka Topi',
      price: 1299,
      originalPrice: 1599,
      image: Product6,
      category: 'fashion',
      rating: 4.8,
      reviews: 152,
      isNew: true,
      discount: 19
    },
       {
      id: 1,
      name: 'Wireless Bluetooth Earbuds',
      price: 2499,
      originalPrice: 2999,
      image: Product1,
      category: 'electronics',
      rating: 4.5,
      reviews: 128,
      isNew: true,
      discount: 17
    },
    {
      id: 2,
      name: 'Smart Watch Pro',
      price: 5499,
      originalPrice: 6999,
      image: Product2,
      category: 'electronics',
      rating: 4.2,
      reviews: 86,
      isNew: true,
      discount: 21
    },
    {
      id: 3,
      name: 'Organic Cotton T-Shirt',
      price: 899,
      originalPrice: 1299,
      image: Product3,
      category: 'fashion',
      rating: 4.0,
      reviews: 45,
      isNew: true,
      discount: 31
    },
    {
      id: 4,
      name: 'Stainless Steel Water Bottle',
      price: 699,
      originalPrice: 999,
      image: Product4,
      category: 'home',
      rating: 4.7,
      reviews: 210,
      isNew: true,
      discount: 30
    },
    {
      id: 5,
      name: 'Wireless Charging Pad',
      price: 1599,
      originalPrice: 1999,
      image: Product5,
      category: 'electronics',
      rating: 4.3,
      reviews: 67,
      isNew: true,
      discount: 20
    },
    {
      id: 6,
      name: 'Handwoven Nepali Dhaka Topi',
      price: 1299,
      originalPrice: 1599,
      image: Product6,
      category: 'fashion',
      rating: 4.8,
      reviews: 152,
      isNew: true,
      discount: 19
    }
  ];

  // Filter products based on category
  const filteredProducts = activeFilter === 'all' 
    ? newArrivals 
    : newArrivals.filter(product => product.category === activeFilter);

  // Sort products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'price-low') return a.price - b.price;
    if (sortOption === 'price-high') return b.price - a.price;
    if (sortOption === 'rating') return b.rating - a.rating;
    return b.id - a.id; // Default: newest first
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">New Arrivals</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Discover our latest products fresh off the shelf
        </p>
      </div>

      {/* Filters and Sorting */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full ${activeFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border'}`}
            >
              All Products
            </button>
            <button
              onClick={() => setActiveFilter('electronics')}
              className={`px-4 py-2 rounded-full ${activeFilter === 'electronics' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border'}`}
            >
              Electronics
            </button>
            <button
              onClick={() => setActiveFilter('fashion')}
              className={`px-4 py-2 rounded-full ${activeFilter === 'fashion' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border'}`}
            >
              Fashion
            </button>
            <button
              onClick={() => setActiveFilter('home')}
              className={`px-4 py-2 rounded-full ${activeFilter === 'home' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border'}`}
            >
              Home & Living
            </button>
          </div>

          {/* Sort Options */}
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Sort by:</span>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border rounded-md px-3 py-2 bg-white"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Customer Rating</option>
            </select>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search new arrivals..."
            className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              {/* Product Image */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                {product.isNew && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    NEW
                  </span>
                )}
                {product.discount && (
                  <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                    {product.discount}% OFF
                  </span>
                )}
                <div className="absolute bottom-2 right-2 flex gap-2">
                  <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                    <FiHeart className="text-gray-600" />
                  </button>
                  <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                    <FiShare2 className="text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        className={`${i < Math.floor(product.rating) ? 'fill-current' : ''}`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-500 text-sm ml-1">
                    ({product.reviews})
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-lg text-blue-600">
                    Rs. {product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-gray-400 line-through text-sm">
                      Rs. {product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md flex items-center justify-center gap-2">
                  <FiShoppingCart /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination (would be dynamic in real app) */}
        <div className="flex justify-center mt-10">
          <nav className="flex items-center gap-1">
            <button className="px-3 py-1 rounded border bg-white text-blue-600">
              1
            </button>
            <button className="px-3 py-1 rounded border bg-white text-gray-600 hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-1 rounded border bg-white text-gray-600 hover:bg-gray-50">
              3
            </button>
            <button className="px-3 py-1 rounded border bg-white text-gray-600 hover:bg-gray-50">
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;