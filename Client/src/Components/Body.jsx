import React from 'react';
import { FaSearch, FaArrowRight } from 'react-icons/fa';

const Body = () => {
  return (
    <div className="relative bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-blue-700 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-blue-700 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
              <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                    <span className="block">Buy and Sell Anything</span>
                    <span className="block text-blue-200">Across Nepal</span>
                  </h1>
                  <p className="mt-3 text-base text-blue-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Find great deals on new and used items in your local community or sell your unused items for cash.
                  </p>
                  <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaSearch className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        className="block w-full pl-10 pr-3 py-4 border border-transparent rounded-md leading-5 bg-blue-600 bg-opacity-25 placeholder-blue-300 focus:outline-none focus:bg-white focus:ring-2 focus:ring-white focus:border-transparent sm:text-sm"
                        placeholder="What are you looking for?"
                      />
                      <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt="Marketplace items"
          />
        </div>
      </div>

      {/* Popular Categories */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Popular Categories
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Browse items by category
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
              {[
                { name: 'Vehicles', icon: '🚗', count: '1,234' },
                { name: 'Electronics', icon: '📱', count: '3,456' },
                { name: 'Property', icon: '🏠', count: '789' },
                { name: 'Fashion', icon: '👕', count: '5,678' },
                { name: 'Home & Garden', icon: '🪴', count: '2,345' },
                { name: 'Jobs', icon: '💼', count: '1,234' },
              ].map((category) => (
                <div key={category.name} className="group text-center">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors">
                    <span className="text-2xl">{category.icon}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900 group-hover:text-blue-600">
                    {category.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{category.count} items</p>
                  <button className="mt-2 text-sm font-medium text-blue-600 group-hover:text-blue-500 flex items-center justify-center mx-auto">
                    Browse <FaArrowRight className="ml-1 h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Listings */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Recently Added Items
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Check out the latest listings in your area
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-w-3 aspect-h-2 bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src={`https://source.unsplash.com/random/300x200?item=${item}`}
                      alt="Listing"
                      className="w-full h-full object-center object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded">
                      New
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Product {item} - Great condition
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Kathmandu, Nepal
                    </p>
                    <p className="mt-2 text-lg font-semibold text-blue-600">
                      Rs. {item * 10000}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 text-center">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              View All Listings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;