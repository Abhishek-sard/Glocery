import React from "react";
import {
  FaSearch,
  FaArrowRight,
  FaLaptop,
  FaTools,
  FaPalette,
  FaCheckCircle,
} from "react-icons/fa";
import Lactop from '../../assets/lactop.jpg';
import Lactop2 from '../../assets/lactop2.jpg';
import Lactop3 from '../../assets/lactop3.jpg';
import Lactop4 from '../../assets/lactop4.jpg';
import Lactop5 from '../../assets/lactop5.jpg';
import Lactop6 from '../../assets/lactop6.jpg';

const Customize = () => {
  const laptops = [
    {
      id: 1,
      image: Lactop,
      name: "MacBook Pro M1",
      price: "Rs. 250,000",
      location: "Kathmandu",
      condition: "New",
      specs: "16GB RAM, 512GB SSD"
    },
    {
      id: 2,
      image: Lactop2,
      name: "Dell XPS 15",
      price: "Rs. 180,000",
      location: "Pokhara",
      condition: "Used",
      specs: "32GB RAM, 1TB SSD"
    },
    {
      id: 3,
      image: Lactop3,
      name: "HP Spectre x360",
      price: "Rs. 150,000",
      location: "Lalitpur",
      condition: "New",
      specs: "16GB RAM, 1TB SSD"
    },
    {
      id: 4,
      image: Lactop4,
      name: "Asus ROG Zephyrus",
      price: "Rs. 220,000",
      location: "Bhaktapur",
      condition: "Used",
      specs: "32GB RAM, 2TB SSD"
    },
    {
      id: 5,
      image: Lactop5,
      name: "Lenovo ThinkPad",
      price: "Rs. 120,000",
      location: "Kathmandu",
      condition: "New",
      specs: "8GB RAM, 256GB SSD"
    },
    {
      id: 6,
      image: Lactop6,
      name: "Acer Predator",
      price: "Rs. 200,000",
      location: "Pokhara",
      condition: "Used",
      specs: "16GB RAM, 512GB SSD"
    }
  ];

  return (
    <div className="relative bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-blue-700 py-16 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Custom Laptop Solutions
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Find great deals on new and used items or get{" "}
            <span className="font-semibold text-white">custom-built laptops</span>{" "}
            tailored to your needs.
          </p>
        </div>
      </div>

      {/* Customization Services */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Customization Services
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Get a laptop built exactly how you want it
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <FaLaptop className="h-8 w-8 text-blue-600" />,
                title: "Hardware Upgrades",
                description: "Enhance performance with premium components",
                features: ["+32GB RAM", "+2TB SSD", "Dedicated GPU"],
                price: "From Rs. 15,000"
              },
              {
                icon: <FaPalette className="h-8 w-8 text-blue-600" />,
                title: "Aesthetic Customization",
                description: "Make it uniquely yours",
                features: ["Custom paint", "Laser engraving", "RGB lighting"],
                price: "From Rs. 10,000"
              },
              {
                icon: <FaTools className="h-8 w-8 text-blue-600" />,
                title: "Software Setup",
                description: "Ready-to-use with your preferred OS",
                features: ["OS installation", "Driver updates", "Essential apps"],
                price: "From Rs. 5,000"
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all">
                <div className="flex justify-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
                    {service.icon}
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-center text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-600 text-center">
                  {service.description}
                </p>
                <div className="mt-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-4 text-center font-medium text-blue-600">
                  {service.price}
                </p>
                <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors">
                  Request Service
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Laptop Listings */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Available Laptops
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Customize any of these models to your specifications
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {laptops.map((laptop) => (
              <div key={laptop.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="relative h-48 w-full">
                  <img
                    src={laptop.image}
                    alt={laptop.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute top-2 left-2 flex space-x-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded ${
                      laptop.condition === "New" 
                        ? "bg-blue-600 text-white" 
                        : "bg-gray-600 text-white"
                    }`}>
                      {laptop.condition}
                    </span>
                    {laptop.id % 2 === 0 && (
                      <span className="bg-purple-600 text-white text-xs font-medium px-2 py-1 rounded">
                        Customizable
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {laptop.name}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    {laptop.location} • {laptop.specs}
                  </p>
                  <p className="text-blue-600 font-bold text-lg mt-2">
                    {laptop.price}
                  </p>
                  <div className="mt-4 flex justify-between">
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                      View Details
                    </button>
                    {laptop.id % 2 === 0 && (
                      <button className="text-purple-600 hover:text-purple-800 font-medium text-sm">
                        Customize
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready for Your Perfect Laptop?
          </h2>
          <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">
            Our specialists will help you build exactly what you need
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-700 hover:bg-gray-100 px-6 py-3 rounded-md font-medium">
              Design Online
            </button>
            <button className="bg-blue-800 text-white hover:bg-blue-900 px-6 py-3 rounded-md font-medium">
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customize;