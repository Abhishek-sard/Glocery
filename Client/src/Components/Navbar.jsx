import React from "react";
import { FaPhone, FaPen } from "react-icons/fa";
import { FiHome, FiShoppingBag, FiLayers, FiBriefcase, FiTruck, FiSettings, FiLogIn } from "react-icons/fi";

const Navbar = () => {
  return(
    <div className="bg-white shadow-md">
      <div className="bg-gray-100 py-2 px-4 flex justify-between items-center text-sm">
        <div className="font-bold text-blue-600">LactopSell.com</div>
        <div className="flex items-center">
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-700 hover:text-blue-600 flex items-center">
              <FiLogIn className="mr-1" />
              <span>Login</span>
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Register
            </a>
          </div>
          <FaPhone className="text-blue-600 mr-1" />
          <span className="text-gray-600">+977 9812345678</span>
        </div>
      </div>
    </div>
  )

  
};

export default Navbar;