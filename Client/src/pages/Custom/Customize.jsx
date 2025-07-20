import React from "react";
import {
  FaSearch,
  FaArrowRight,
  FaLaptop,
  FaTools,
  FaPalette,
  FaCheckCircle,
} from "react-icons/fa";
import Lactop from "../assets/Lactop.jpg";
import Lactop2 from "../assets/Lactop2.jpg";
import Lactop3 from "../assets/Lactop3.jpg";
import Lactop4 from "../assets/Lactop4.jpg";
import Lactop5 from "../assets/Lactop5.jpg";
import Lactop6 from "../assets/Lactop6.jpg";
const Customize = () => {
  const laptops = [
    {
      id: 1,
      image: Lactop,
      name: "Laptop 1",
      price: "Rs. 50,000",
      location: "Kathmandu",
      condition: "New",
    },
    {
      id: 2,
      image: Lactop2,
      name: "Laptop 2",
      price: "Rs. 60,000",
      location: "Pokhara",
      condition: "Used",
    },
    {
      id: 3,
      image: Lactop3,
      name: "Laptop 3",
      price: "Rs. 70,000",
      location: "Biratnagar",
      condition: "New",
    },
    {
      id: 4,
      image: Lactop4,
      name: "Laptop 4",
      price: "Rs. 80,000",
      location: "Lalitpur",
      condition: "Used",
    },

    {
      id: 5,
      image: Lactop5,
      name: "Laptop 5",
      price: "Rs. 90,000",
      location: "Bhaktapur",
      condition: "New",
    },
    {
      id: 6,
      image: Lactop6,
      name: "Laptop 6",
      price: "Rs. 100,000",
      location: "Kathmandu",
      condition: "Used",
    },
  ];

  return (
    <div className="relative bg-gray-50">
      {/* Hero Section - Add customization mention */}
      <div className="relative bg-blue-700 overflow-hidden">
        {/* ... */}
        <div className="mt-3 text-base text-blue-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Find great deals on new and used items or get{" "}
          <span className="font-semibold text-white">custom-built laptops</span>{" "}
          tailored to your needs.
        </div>
        {/* ... */}
      </div>

      {/* Customization Services Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Customization Services
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Get a laptop built exactly how you want it
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <FaLaptop className="h-8 w-8 text-blue-600" />,
                title: "Hardware Upgrades",
                description:
                  "RAM, SSD, GPU upgrades to match your performance needs",
                features: ["+32GB RAM", "+2TB SSD", "Dedicated GPU"],
              },
              {
                icon: <FaPalette className="h-8 w-8 text-blue-600" />,
                title: "Aesthetic Customization",
                description: "Make it uniquely yours with custom designs",
                features: [
                  "Custom paint jobs",
                  "Laser engraving",
                  "RGB lighting",
                ],
              },
              {
                icon: <FaTools className="h-8 w-8 text-blue-600" />,
                title: "Software Pre-configuration",
                description: "Ready-to-use with your preferred setup",
                features: [
                  "OS installation",
                  "Drivers pre-loaded",
                  "Essential software",
                ],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 mx-auto">
                  {service.icon}
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-600 text-center">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <FaCheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors">
                  Request Customization
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Featured Listings with Customization Badge */}
      <div className="py-12 bg-gray-50">
        {/* ... */}
        <div className="mt-10">
          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
            {laptops.map((laptop) => (
              <div
                key={laptop.id}
                className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* ... */}
                <div className="absolute top-2 left-2 flex space-x-2">
                  <div className="bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded">
                    New
                  </div>
                  {laptop.id % 2 === 0 && (
                    <div className="bg-purple-600 text-white text-xs font-medium px-2 py-1 rounded">
                      Customizable
                    </div>
                  )}
                </div>
                {/* ... */}
                <div className="mt-3 flex justify-between items-center">
                  <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                    View Details
                  </button>
                  {laptop.id % 2 === 0 && (
                    <button className="text-sm text-purple-600 hover:text-purple-800 font-medium">
                      Customize
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Build CTA */}
      <div className="bg-blue-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Need Something Special?
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-blue-100 mx-auto">
            Our experts can build your dream laptop with exact specifications
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-blue-50">
              Design Your Laptop
            </button>
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-800 hover:bg-blue-900">
              Contact Our Specialist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customize;
