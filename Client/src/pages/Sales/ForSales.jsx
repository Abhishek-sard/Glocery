import React, { useState, useEffect } from 'react';
import { FiShoppingCart, FiHeart, FiClock, FiChevronRight } from 'react-icons/fi';
import { FaFire, FaPercent, FaRegStar, FaStar } from 'react-icons/fa';


import Product1 from '../../assets/lactop.jpg';
import Product2 from '../../assets/lactop2.jpg';

import Product3 from '../../assets/lactop3.jpg';

import Product4 from '../../assets/lactop4.jpg';

import Product5 from '../../assets/lactop5.jpg';

import Product6 from '../../assets/lactop6.jpg';

import Banner1 from '../../assets/lactop.jpg';
import Banner2 from '../../assets/lactop2.jpg';

const ForSales = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Countdown timer for flash sale
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const endDate = new Date();
      endDate.setDate(now.getDate() + 2); // Sale ends in 2 days
      
      const diff = endDate - now;
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Sale products data
  const saleProducts = [
    {
      id: 1,
      name: 'Wireless Headphones Pro',
      price: 3499,
      originalPrice: 4999,
      image: Product1,
      discount: 30,
      rating: 4.7,
      sold: 128,
      isHot: true,
      timeLeft: '12:45:30' // For individual product timers
    },
    {
      id: 2,
      name: 'Smart Fitness Band',
      price: 1999,
      originalPrice: 2999,
      image: Product2,
      discount: 33,
      rating: 4.3,
      sold: 86,
      isHot: false
    },
    {
      id: 3,
      name: 'Stainless Steel Cookware Set',
      price: 4599,
      originalPrice: 6999,
      image: Product3,
      discount: 34,
      rating: 4.8,
      sold: 45,
      isHot: true
    },
    {
      id: 4,
      name: 'Organic Cotton Bed Sheets',
      price: 1299,
      originalPrice: 1999,
      image: Product4,
      discount: 35,
      rating: 4.5,
      sold: 210,
      isHot: false
    },
    {
      id: 5,
      name: 'Bluetooth Speaker',
      price: 1799,
      originalPrice: 2499,
      image: Product5,
      discount: 28,
      rating: 4.6,
      sold: 67,
      isHot: true
    },
    {
      id: 6,
      name: 'Winter Jacket',
      price: 2999,
      originalPrice: 3999,
      image: Product6,
      discount: 25,
      rating: 4.4,
      sold: 152,
      isHot: false
    }
  ];

  const topDeals = saleProducts.filter(product => product.isHot);
  const bestDiscounts = [...saleProducts].sort((a, b) => b.discount - a.discount).slice(0, 4);
  const almostGone = [...saleProducts].sort((a, b) => b.sold - a.sold).slice(0, 4);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Sales Hero Banner */}
      <div className="relative bg-red-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <FaFire className="text-2xl mr-2" />
            <h1 className="text-4xl font-bold">MEGA SALE</h1>
          </div>
          <p className="text-xl mb-6">Huge discounts on top products for a limited time only!</p>
          
          {/* Countdown Timer */}
          <div className="flex justify-center gap-4 mb-8">
            <div className="bg-white text-red-600 rounded-lg p-3 min-w-[70px]">
              <div className="text-2xl font-bold">{timeLeft.days}</div>
              <div className="text-sm">Days</div>
            </div>
            <div className="bg-white text-red-600 rounded-lg p-3 min-w-[70px]">
              <div className="text-2xl font-bold">{timeLeft.hours}</div>
              <div className="text-sm">Hours</div>
            </div>
            <div className="bg-white text-red-600 rounded-lg p-3 min-w-[70px]">
              <div className="text-2xl font-bold">{timeLeft.minutes}</div>
              <div className="text-sm">Minutes</div>
            </div>
            <div className="bg-white text-red-600 rounded-lg p-3 min-w-[70px]">
              <div className="text-2xl font-bold">{timeLeft.seconds}</div>
              <div className="text-sm">Seconds</div>
            </div>
          </div>
          
          <button className="bg-white text-red-600 font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition">
            Shop Now
          </button>
        </div>
      </div>

      {/* Sales Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {['Electronics', 'Fashion', 'Home', 'Beauty'].map((category) => (
            <div key={category} className="bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md transition cursor-pointer">
              <div className="bg-red-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3">
                <FaPercent className="text-red-600 text-2xl" />
              </div>
              <h3 className="font-semibold">{category} Deals</h3>
              <p className="text-sm text-gray-500">Up to 70% off</p>
            </div>
          ))}
        </div>

        {/* Flash Sale Section */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold flex items-center">
              <FiClock className="text-red-600 mr-2" /> Flash Sale
            </h2>
            <a href="#" className="text-red-600 flex items-center">
              View all <FiChevronRight className="ml-1" />
            </a>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {topDeals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Banner */}
        <div className="mb-16 rounded-lg overflow-hidden">
          <img src={Banner1} alt="Special Offer" className="w-full h-auto" />
        </div>

        {/* Best Discounts */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Best Discounts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {bestDiscounts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Almost Gone */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Almost Gone!</h2>
            <a href="#" className="text-red-600 flex items-center">
              View all <FiChevronRight className="ml-1" />
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {almostGone.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Final Banner */}
        <div className="rounded-lg overflow-hidden mb-8">
          <img src={Banner2} alt="Last Chance" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

// Reusable Product Card Component
const ProductCard = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <button 
          onClick={() => setIsLiked(!isLiked)}
          className={`absolute top-2 right-2 p-2 rounded-full ${isLiked ? 'text-red-500' : 'text-gray-400 bg-white'}`}
        >
          <FiHeart className={isLiked ? 'fill-current' : ''} />
        </button>
        {product.discount && (
          <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
            {product.discount}% OFF
          </div>
        )}
        {product.timeLeft && (
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-xs p-1 text-center">
            Ends in: {product.timeLeft}
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold mb-1 truncate">{product.name}</h3>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            i < Math.floor(product.rating) ? 
              <FaStar key={i} className="text-yellow-400 text-sm" /> : 
              <FaRegStar key={i} className="text-yellow-400 text-sm" />
          ))}
          <span className="text-gray-500 text-xs ml-1">({product.sold})</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold text-red-600">Rs. {product.price.toLocaleString()}</span>
          <span className="text-gray-400 line-through text-sm">
            Rs. {product.originalPrice.toLocaleString()}
          </span>
        </div>
        <button className="mt-3 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md flex items-center justify-center gap-2 text-sm">
          <FiShoppingCart /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ForSales;