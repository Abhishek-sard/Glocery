import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality
    console.log("Searching for:", searchQuery);
  };

  return (
    <>
      {/* Scrollable area for demo - remove in production */}
      <div className="h-88 md:h-64 overflow-y-scroll">
        <p className="w-10 h-[500px]"></p>
      </div>
      
      <nav
        className={`fixed top-0 left-0 bg-sky-50 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${
          isScrolled
            ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4"
            : "py-4 md:py-6"
        }`}
      >
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            src={Logo}
            alt="Company Logo"
            className={`h-9 ${isScrolled ? "invert opacity-80" : ""}`}
          />
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          <NavLink 
            to="/"
            className={({ isActive }) => `group flex flex-col gap-0.5 ${
              isScrolled ? "text-gray-700" : "text-black"
            } ${
              isActive ? "font-medium" : ""
            }`}
          >
            Home
            <div
              className={`${
                isScrolled ? "bg-gray-700" : "bg-black"
              } h-0.5 w-0 group-hover:w-full transition-all duration-300`}
            />
          </NavLink>
          
          <NavLink 
            to="/products"
            className={({ isActive }) => `group flex flex-col gap-0.5 ${
              isScrolled ? "text-gray-700" : "text-black"
            } ${
              isActive ? "font-medium" : ""
            }`}
          >
            All Products
            <div
              className={`${
                isScrolled ? "bg-gray-700" : "bg-black"
              } h-0.5 w-0 group-hover:w-full transition-all duration-300`}
            />
          </NavLink>
          
          <NavLink 
            to="/contact"
            className={({ isActive }) => `group flex flex-col gap-0.5 ${
              isScrolled ? "text-gray-700" : "text-black"
            } ${
              isActive ? "font-medium" : ""
            }`}
          >
            Contact
            <div
              className={`${
                isScrolled ? "bg-gray-700" : "bg-black"
              } h-0.5 w-0 group-hover:w-full transition-all duration-300`}
            />
          </NavLink>
        </div>

        {/* Desktop Right Section with Search and Cart */}
        <div className="hidden md:flex items-center gap-6">
          {/* Search Bar */}
          <form 
            onSubmit={handleSearch}
            className="flex items-center border pl-4 pr-2 gap-2 border-gray-300 h-10 rounded-full overflow-hidden transition-all duration-300 focus-within:border-black"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke={isScrolled ? "#374151" : "#6B7280"}
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-40 lg:w-56 outline-none text-gray-700 bg-transparent placeholder-gray-500 text-sm"
            />
            {searchQuery && (
              <button 
                type="button" 
                onClick={() => setSearchQuery("")}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            )}
          </form>

          {/* Cart Icon */}
          <NavLink to="/cart" className="relative">
            <svg
              className={`h-6 w-6 transition-all duration-500 ${
                isScrolled ? "text-gray-700" : "text-black"
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </NavLink>

          {/* Login Button */}
          <NavLink
            to="/login"
            className={`px-6 py-2 rounded-full transition-all duration-500 ${
              isScrolled ? "text-white bg-black" : "bg-black text-white"
            } hover:bg-opacity-90`}
          >
            Login
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Mobile Search Icon */}
          <button aria-label="Search">
            <svg
              className={`h-6 w-6 ${isScrolled ? "text-gray-700" : "text-black"}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          {/* Mobile Cart Icon */}
          <NavLink to="/cart" className="relative">
            <svg
              className={`h-6 w-6 ${isScrolled ? "text-gray-700" : "text-black"}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </NavLink>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className={`${isScrolled ? "text-gray-700" : "text-black"}`}
          >
            <svg
              className="h-6 w-6 cursor-pointer"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-white/90 backdrop-blur-sm z-50 flex flex-col items-center justify-center gap-6 font-medium text-gray-800 md:hidden"
            aria-modal="true"
            role="dialog"
          >
            <button
              className="absolute top-4 right-4 p-2"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Mobile Search Bar */}
            <form 
              onSubmit={handleSearch}
              className="flex items-center border px-4 py-2 gap-2 border-gray-300 rounded-full w-3/4 max-w-md"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#6B7280"
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input 
                type="text" 
                placeholder="Search products..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full outline-none bg-transparent placeholder-gray-500"
              />
            </form>

            <NavLink 
              to="/" 
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => `text-xl ${isActive ? "font-bold" : ""}`}
            >
              Home
            </NavLink>
            
            <NavLink 
              to="/products" 
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => `text-xl ${isActive ? "font-bold" : ""}`}
            >
              All Products
            </NavLink>
            
            <NavLink 
              to="/contact" 
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => `text-xl ${isActive ? "font-bold" : ""}`}
            >
              Contact
            </NavLink>

            <NavLink 
              to="/login" 
              onClick={() => setIsMenuOpen(false)}
              className="bg-black text-white px-8 py-3 rounded-full text-lg hover:bg-opacity-90 transition-colors"
            >
              Login
            </NavLink>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;