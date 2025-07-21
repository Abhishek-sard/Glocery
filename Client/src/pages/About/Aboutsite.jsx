import React from 'react';
import { FaUsers, FaHandshake, FaMapMarkerAlt, FaAward } from 'react-icons/fa';
import Shop from '../../assets/Shop.jpg';
import Seller1 from '../../assets/Seller1.jpg';
import Seller2 from '../../assets/Seller2.jpg';
import Seller3 from '../../assets/Seller3.jpg';
const Aboutsite = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Kp oli',
      role: 'Founder & CEO',
      image: Seller1,
      bio: 'Tech enthusiast with 10+ years in e-commerce'
    },
    {
      id: 2,
      name: 'Prachanda',
      image: Seller2,
      role: 'Marketing Director',
      bio: 'Digital marketing specialist and brand strategist'
    },
    {
      id: 3,
      name: 'Sher Bhadhur ',
      image: Seller3,
      role: 'Tech Lead',
      bio: 'Mechenical '
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-700 py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4"> SellBazar</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Nepal's fastest growing online marketplace connecting buyers and sellers nationwide
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                Founded in 2020, SellBazar started as a small initiative to help locals buy and sell items within their community. 
                What began as a passion project quickly grew into Nepal's most trusted online marketplace.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Today, we serve thousands of customers across all seven provinces, offering everything from electronics to vehicles, 
                property, and services - all with a focus on local commerce.
              </p>
              <p className="text-lg text-gray-600">
                Our mission is to empower Nepali businesses and individuals by providing a safe, easy-to-use platform for online transactions.
              </p>
            </div>
            <div className="lg:w-1/2 mt-10 lg:mt-0 lg:pl-12">
              <img 
                src={Shop} 
                alt="SellBazar team working" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: <FaUsers className="h-8 w-8 text-blue-600" />, value: '50,000+', label: 'Active Users' },
              { icon: <FaHandshake className="h-8 w-8 text-blue-600" />, value: '200,000+', label: 'Successful Transactions' },
              { icon: <FaMapMarkerAlt className="h-8 w-8 text-blue-600" />, value: '77', label: 'Districts Covered' },
              { icon: <FaAward className="h-8 w-8 text-blue-600" />, value: '98%', label: 'Positive Ratings' }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
                    {stat.icon}
                  </div>
                </div>
                <h3 className="mt-4 text-3xl font-bold text-gray-900">{stat.value}</h3>
                <p className="mt-2 text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind SellBazar's success
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 mt-1">{member.role}</p>
                  <p className="text-gray-600 mt-3">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              What drives us every day
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Trust & Safety",
                description: "We prioritize secure transactions and verified users to build a trustworthy platform",
                icon: "🔒"
              },
              {
                title: "Local Empowerment",
                description: "We're committed to boosting Nepal's digital economy and local businesses",
                icon: "🇳🇵"
              },
              {
                title: "Customer First",
                description: "Your satisfaction guides every decision we make",
                icon: "❤️"
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <span className="text-3xl mb-4 inline-block">{value.icon}</span>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Growing Community</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you're buying or selling, we've got you covered
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-700 hover:bg-gray-100 px-6 py-3 rounded-md font-medium">
              Start Shopping
            </button>
            <button className="bg-blue-800 text-white hover:bg-blue-900 px-6 py-3 rounded-md font-medium">
              Sell Your Items
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutsite;