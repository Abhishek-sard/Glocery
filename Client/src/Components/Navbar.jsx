import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FaPhone, FaPen, FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { FiHome, FiShoppingBag, FiLayers, FiBriefcase, FiTruck, FiSettings, FiLogIn } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  return (
    <div className="bg-white shadow-md">
      {/* Top navbar - Contact info */}
      <div className="bg-gray-100 py-2 px-4 flex justify-between items-center text-sm">
        <div className="font-bold text-blue-600">SellBazar.com</div>
        <div className="flex items-center">
          <FaPhone className="mr-1 text-blue-600" />
          <span className="hidden sm:inline">+977 9812345678</span>
        </div>
      </div>

      {/* Middle navbar - Search and main actions */}
      <div className="container mx-auto px-4 py-3 ">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo and mobile menu button */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <div className="text-2xl font-bold text-blue-700">Logo(Design)</div>
            <button 
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          
          {/* Search bar - visible on all screens */}
          <div className="w-full md:w-auto md:flex-1 md:max-w-xl mx-0 md:mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-0 top-0 h-full bg-blue-600 text-white px-4 rounded-r-md md:block hidden">
                Search
              </button>
              <button className="absolute right-0 top-0 h-full bg-blue-600 text-white px-3 rounded-r-md md:hidden">
                <FaSearch />
              </button>
            </div>
          </div>
          
          {/* Right side actions - hidden on mobile when menu is closed */}
          <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex items-center space-x-4 w-full md:w-auto justify-between md:justify-normal mt-4 md:mt-0`}>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center space-x-1 w-full md:w-auto justify-center">
              <FaPen className="text-sm" />
              <span>Post an Ad</span>
            </button>
            
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-700 hover:text-blue-600 flex items-center">
                <FiLogIn className="mr-1" />
                <span>Login</span>
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Register
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom navbar - Categories and icons */}
      <div className="bg-white py-2 shadow-sm">
        <div className="container mx-auto px-4">
          {/* Mobile category dropdown button */}
          <button 
            className="md:hidden flex items-center space-x-1 bg-blue-600 text-white px-4 py-2 rounded-md w-full justify-center mb-2"
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
          >
            <span>All Categories</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isCategoryOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
            </svg>
          </button>

          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* All Categories dropdown - desktop */}
            <div className="relative group hidden md:block">
              <button className="flex items-center space-x-1 bg-blue-600 text-white px-4 py-2 rounded-md">
                <span>All Category</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Headphone</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Keyboards</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Computers</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Wires</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Fans </a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Electronics</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Television</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Laptop</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Mobile Accessories</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Mobile Phones</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Cameras</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Servicing & Repair</a>
              </div>
            </div>

            {/* Mobile category dropdown content */}
            <div className={`${isCategoryOpen ? 'block' : 'hidden'} md:hidden w-full mb-2`}>
              <div className="bg-white rounded-md shadow-lg py-1">
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Cars</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Clothing and Shoes</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Computers</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Electric cars</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Electric Scooter</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Electronics</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Houses</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Laptop</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Mobile Accessories</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Mobile Phones</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Cameras</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Servicing & Repair</a>
              </div>
            </div>

            {/* Navigation icons */}
            <div className="flex overflow-x-auto w-full md:w-auto py-2 md:py-0 hide-scrollbar">
              <div className="flex space-x-6 md:space-x-8 mx-auto">
                <a href="/" className="flex flex-col items-center text-gray-700 hover:text-blue-600 min-w-[60px]">
                  <FiHome className="text-xl" />
                  <span className="text-xs mt-1">Home</span>
                </a>
                <a href="/Custom" className="flex flex-col items-center text-gray-700 hover:text-blue-600 min-w-[60px]">
                  <FiShoppingBag className="text-xl" />
                  <span className="text-xs mt-1">Customize</span>
                </a>
                <a href="/About" className="flex flex-col items-center text-gray-700 hover:text-blue-600 min-w-[60px]">
                  <FiLayers className="text-xl" />
                  <span className="text-xs mt-1">About</span>
                </a>
                <a href="/Arrivals" className="flex flex-col items-center text-gray-700 hover:text-blue-600 min-w-[60px]">
                  <FiBriefcase className="text-xl" />
                  <span className="text-xs mt-1">New Arrivals</span>
                </a>
                <a href="#" className="flex flex-col items-center text-gray-700 hover:text-blue-600 min-w-[60px]">
                  <FiTruck className="text-xl" />
                  <span className="text-xs mt-1">For Sale</span>
                </a>
                <a href="#" className="flex flex-col items-center text-gray-700 hover:text-blue-600 min-w-[60px]">
                  <FiSettings className="text-xl" />
                  <span className="text-xs mt-1">Services</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add this to your global CSS or in a style tag */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Navbar;