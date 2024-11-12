import React, { useState } from 'react';
import { MapPin, Calendar as CalendarIcon, ChevronRight } from 'lucide-react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from 'next/image';

const LandingPage = () => {
  const [startDate, setStartDate] = useState(null);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative min-h-[85vh] bg-gradient-to-r from-black to-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/bikes.jpg"
            alt="description"
            layout="fill"
            objectFit="cover"
            objectPosition="center top" // Adjusts image position for mobile responsiveness
          />
        </div>

        <div className="relative container mx-auto px-4 pt-28">
          <div className="max-w-3xl mx-auto text-center text-white mb-12 bg-black/60 p-8 rounded-lg">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Rent Bikes for Your
              <span className="text-yellow-400"> Next Adventure</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Explore the city on two wheels with instant bookings and zero deposit
            </p>
          </div>
          {/* Search Box */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-black rounded-lg shadow-xl p-4 border border-yellow-400">
              <div className="grid md:grid-cols-3 gap-4">
                {/* Location Selector */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-300 mb-1">City</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400" size={20} />
                    <select className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 appearance-none bg-gray-800 text-white">
                      <option>Select your city</option>
                      <option>Bangalore</option>
                      <option>Mumbai</option>
                      <option>Delhi</option>
                    </select>
                  </div>
                </div>
                {/* Custom Date Picker with Calendar Icon */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-300 mb-1">Pickup Date</label>
                  <div className="relative">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 bg-gray-800 text-white"
                      placeholderText="Pick a date"
                      dateFormat="MMMM d, yyyy"
                      todayButton="Today"
                    />
                    <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400" size={20} />
                  </div>
                </div>
                {/* Search Button */}
                <div className="relative">
                  <label className="block text-sm font-medium text-transparent mb-1">Search</label>
                  <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-colors">
                    <span>Search Bikes</span>
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
              {/* Quick Links */}
              <div className="mt-4 flex flex-wrap gap-4 justify-center">
                <button className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 rounded-full text-sm text-black transition-colors">
                  Bangalore
                </button>
                <button className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 rounded-full text-sm text-black transition-colors">
                  Mumbai
                </button>
                <button className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 rounded-full text-sm text-black transition-colors">
                  Delhi
                </button>
                <button className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 rounded-full text-sm text-black transition-colors">
                  Hyderabad
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-900 py-16">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-8">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="feature-card">
              <h3 className="text-2xl font-semibold text-yellow-400">Fast Booking</h3>
              <p className="text-gray-300">Instant booking with just a few clicks.</p>
            </div>
            <div className="feature-card">
              <h3 className="text-2xl font-semibold text-yellow-400">No Deposit</h3>
              <p className="text-gray-300">Rent bikes with zero upfront deposit.</p>
            </div>
            <div className="feature-card">
              <h3 className="text-2xl font-semibold text-yellow-400">Flexible Rentals</h3>
              <p className="text-gray-300">Choose from hourly, daily, or weekly plans.</p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-gray-800 py-16">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="step-card">
              <h3 className="text-2xl font-semibold text-yellow-400">Step 1</h3>
              <p className="text-gray-300">Choose your bike and location.</p>
            </div>
            <div className="step-card">
              <h3 className="text-2xl font-semibold text-yellow-400">Step 2</h3>
              <p className="text-gray-300">Pick a date and time for pickup.</p>
            </div>
            <div className="step-card">
              <h3 className="text-2xl font-semibold text-yellow-400">Step 3</h3>
              <p className="text-gray-300">Enjoy your ride and return it on time.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-gray-900 py-16">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-8">Our Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="pricing-card">
              <h3 className="text-2xl font-semibold text-yellow-400">Basic</h3>
              <p className="text-gray-300">$10 per hour</p>
            </div>
            <div className="pricing-card">
              <h3 className="text-2xl font-semibold text-yellow-400">Standard</h3>
              <p className="text-gray-300">$40 per day</p>
            </div>
            <div className="pricing-card">
              <h3 className="text-2xl font-semibold text-yellow-400">Premium</h3>
              <p className="text-gray-300">$100 per week</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-800 py-16">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-8">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="testimonial-card">
              <p className="text-gray-300">&quot;Amazing service! So easy to use and very reliable!&quot;</p>
              <p className="font-semibold text-yellow-400">John Doe</p>
            </div>
            <div className="testimonial-card">
              <p className="text-gray-300">&quot;Amazing service! So easy to use and very reliable!&quot;</p>
              <p className="font-semibold text-yellow-400">Jane Smith</p>
            </div>
            <div className="testimonial-card">
              <p className="text-gray-300">&quot;Amazing service! So easy to use and very reliable!&quot;</p>
              <p className="font-semibold text-yellow-400">Mark Williams</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action (CTA) Section */}
      <div className="bg-yellow-400 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Ride?</h2>
          <p className="text-lg text-black mb-8">Get started today and enjoy the ride!</p>
          <button className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors">
            Book Now
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black text-white py-8">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; 2024 Rent Bike. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
