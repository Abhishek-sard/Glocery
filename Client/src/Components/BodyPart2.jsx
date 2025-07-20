import React from 'react';
import { FaStar, FaShoppingCart, FaHeart, FaBolt } from 'react-icons/fa';

const BodyPart2 = () => {
  // Sample data for products
  const laptops = [
    {
      id: 1,
      name: 'MacBook Pro M1 2023',
      price: 'Rs. 250,000',
      location: 'Kathmandu',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9',
      isFeatured: true
    },
    {
      id: 2,
      name: 'Dell XPS 15',
      price: 'Rs. 180,000',
      location: 'Pokhara',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45',
      discount: '10% off'
    },
    {
      id: 3,
      name: 'HP Spectre x360',
      price: 'Rs. 150,000',
      location: 'Lalitpur',
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1587202372775-e229f172cdd5'
    },
    {
      id: 4,
      name: 'Asus ROG Zephyrus',
      price: 'Rs. 220,000',
      location: 'Bhaktapur',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67',
      isNew: true
    }
  ];

  const electronics = [
    {
      id: 1,
      name: 'Sony WH-1000XM4 Headphones',
      price: 'Rs. 35,000',
      location: 'Kathmandu',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df'
    },
    {
      id: 2,
      name: 'iPhone 14 Pro Max',
      price: 'Rs. 180,000',
      location: 'Pokhara',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1664478546384-d57ffe74a78c',
      isFeatured: true
    },
    {
      id: 3,
      name: 'Samsung QLED 4K TV',
      price: 'Rs. 120,000',
      location: 'Lalitpur',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db',
      discount: '15% off'
    },
    {
      id: 4,
      name: 'DJI Mavic Air 2',
      price: 'Rs. 150,000',
      location: 'Bhaktapur',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1579829366248-204fe8413f31',
      isNew: true
    }
  ];

  return (
    <div className="bg-gray-50 py-12">
      {/* Featured Laptops Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Laptops</h2>
          <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
            View all laptops <span className="ml-1">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {laptops.map((laptop) => (
            <div key={laptop.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={`${laptop.image}?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80`}
                  alt={laptop.name}
                />
                <div className="absolute top-2 left-2 flex space-x-2">
                  {laptop.isFeatured && (
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      Featured
                    </span>
                  )}
                  {laptop.isNew && (
                    <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
                      New
                    </span>
                  )}
                  {laptop.discount && (
                    <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                      {laptop.discount}
                    </span>
                  )}
                </div>
                <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
                  <FaHeart className="text-gray-400 hover:text-red-500" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{laptop.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{laptop.location}</p>
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`${i < Math.floor(laptop.rating) ? 'text-yellow-400' : 'text-gray-300'} w-4 h-4`}
                    />
                  ))}
                  <span className="text-gray-500 text-xs ml-1">({laptop.rating})</span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-blue-600">{laptop.price}</p>
                  <button className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">
                    <FaShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hot Deals in Electronics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <FaBolt className="text-yellow-500 mr-2" />
            <h2 className="text-3xl font-bold text-gray-900">Hot Deals in Electronics</h2>
          </div>
          <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
            View all electronics <span className="ml-1">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {electronics.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={`${item.image}?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80`}
                  alt={item.name}
                />
                <div className="absolute top-2 left-2 flex space-x-2">
                  {item.isFeatured && (
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      Featured
                    </span>
                  )}
                  {item.isNew && (
                    <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
                      New
                    </span>
                  )}
                  {item.discount && (
                    <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                      {item.discount}
                    </span>
                  )}
                </div>
                <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
                  <FaHeart className="text-gray-400 hover:text-red-500" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{item.location}</p>
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`${i < Math.floor(item.rating) ? 'text-yellow-400' : 'text-gray-300'} w-4 h-4`}
                    />
                  ))}
                  <span className="text-gray-500 text-xs ml-1">({item.rating})</span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-blue-600">{item.price}</p>
                  <button className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">
                    <FaShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white py-12 rounded-xl shadow-sm">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose SellBazar?</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Verified Sellers</h3>
            <p className="text-gray-600">All our sellers are verified to ensure you get genuine products</p>
          </div>
          <div className="text-center">
            <div className="mx-auto h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Best Prices</h3>
            <p className="text-gray-600">Find the best deals and negotiate directly with sellers</p>
          </div>
          <div className="text-center">
            <div className="mx-auto h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Secure Payments</h3>
            <p className="text-gray-600">Multiple payment options with complete security</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-blue-700 rounded-xl overflow-hidden">
          <div className="px-6 py-12 sm:px-16 sm:py-16 lg:py-20 lg:px-24 xl:px-32">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">Ready to sell your items?</span>
                  <span className="block text-blue-200">Join thousands of happy sellers today</span>
                </h2>
                <p className="mt-4 text-lg text-blue-100">
                  List your products for free and reach millions of potential buyers across Nepal.
                </p>
              </div>
              <div className="mt-8 lg:mt-0 lg:w-1/2 lg:flex lg:justify-end">
                <div className="inline-flex rounded-md shadow">
                  <button className="inline-flex items-center justify-center px-6 py-4 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50">
                    Start Selling Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyPart2;