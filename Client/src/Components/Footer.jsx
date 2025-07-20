import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* About Section */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="bg-blue-600 p-1 rounded mr-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </span>
              GauBazar.com
            </h3>
            <p className="text-gray-400 mb-4">
              Nepal's fastest growing online marketplace. Buy and sell everything from used cars to mobile phones and computers, or search for property, jobs and more.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Popular Categories */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Popular Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Cars & Vehicles</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Electronics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Property</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Mobile Phones</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Jobs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Fashion</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-blue-400 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-400">Kathmandu, Nepal</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-blue-400 mr-2 flex-shrink-0" />
                <span className="text-gray-400">+977 9812771487</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-blue-400 mr-2 flex-shrink-0" />
                <span className="text-gray-400">info@gaubazar.com</span>
              </li>
              <li className="flex items-center">
                <FaClock className="text-blue-400 mr-2 flex-shrink-0" />
                <span className="text-gray-400">Mon-Sun: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-bold mb-2">Subscribe to our Newsletter</h3>
              <p className="text-gray-400">Get the latest updates on new products and upcoming sales</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright and Bottom Links */}
        <div className="pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} GauBazar.com. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;