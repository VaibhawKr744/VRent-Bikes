import React, { useState } from 'react';
import { Calendar as CalendarIcon, ChevronRight } from 'lucide-react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from 'next/image';

const LandingPage = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [startTime, setStartTime] = useState("9:00 AM");
  const [endTime, setEndTime] = useState("9:00 AM");

  // Function to generate time options from 9 AM to 9 PM
  const generateTimeOptions = () => {
    const times = [];
    for (let i = 9; i <= 21; i++) {
      const hour = i > 12 ? i - 12 : i;
      const ampm = i >= 12 ? 'PM' : 'AM';
      times.push(`${hour}:00 ${ampm}`);
    }
    return times;
  };

  const timeOptions = generateTimeOptions();

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
            objectPosition="center top"
          />
        </div>

        <div className="relative container mx-auto px-4 pt-28">
          <div className="max-w-3xl mx-auto text-center text-white mb-12 bg-black/60 p-8 rounded-lg">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Rent Bikes for Your
              <span className="text-[#F9E356]"> Next Adventure</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Explore the city on two wheels with instant bookings and zero deposit
            </p>
          </div>

          {/* Search Box */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-black rounded-lg shadow-xl p-6 border border-[#F9E356]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Start Date and Time */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Start Date & Time
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative">
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#F9E356] focus:border-[#F9E356] bg-gray-800 text-white"
                        placeholderText="Pick date"
                        dateFormat="MMM d, yyyy"
                        minDate={new Date()}
                      />
                      <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-[#F9E356]" size={20} />
                    </div>
                    <select
                      value={startTime}
                      onChange={(e) => setStartTime(e.target.value)}
                      className="w-full py-3 px-4 border rounded-lg focus:ring-2 focus:ring-[#F9E356] focus:border-[#F9E356] bg-gray-800 text-white appearance-none"
                    >
                      {timeOptions.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* End Date and Time */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    End Date & Time
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative">
                      <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#F9E356] focus:border-[#F9E356] bg-gray-800 text-white"
                        placeholderText="Pick date"
                        dateFormat="MMM d, yyyy"
                        minDate={startDate || new Date()}
                      />
                      <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-[#F9E356]" size={20} />
                    </div>
                    <select
                      value={endTime}
                      onChange={(e) => setEndTime(e.target.value)}
                      className="w-full py-3 px-4 border rounded-lg focus:ring-2 focus:ring-[#F9E356] focus:border-[#F9E356] bg-gray-800 text-white appearance-none"
                    >
                      {timeOptions.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Search Button */}
              <div className="mt-6">
                <button className="w-full bg-[#F9E356] hover:bg-[#F9E356]/90 text-black py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-colors font-semibold">
                  <span>Search Available Bikes</span>
                  <ChevronRight size={20} />
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
              <h3 className="text-2xl font-semibold text-[#F9E356]">Fast Booking</h3>
              <p className="text-gray-300">Instant booking with just a few clicks.</p>
            </div>
            <div className="feature-card">
              <h3 className="text-2xl font-semibold text-[#F9E356]">No Deposit</h3>
              <p className="text-gray-300">Rent bikes with zero upfront deposit.</p>
            </div>
            <div className="feature-card">
              <h3 className="text-2xl font-semibold text-[#F9E356]">Flexible Rentals</h3>
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
              <h3 className="text-2xl font-semibold text-[#F9E356]">Step 1</h3>
              <p className="text-gray-300">Choose your bike and location.</p>
            </div>
            <div className="step-card">
              <h3 className="text-2xl font-semibold text-[#F9E356]">Step 2</h3>
              <p className="text-gray-300">Pick a date and time for pickup.</p>
            </div>
            <div className="step-card">
              <h3 className="text-2xl font-semibold text-[#F9E356]">Step 3</h3>
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
              <h3 className="text-2xl font-semibold text-[#F9E356]">Basic</h3>
              <p className="text-gray-300">$10 per hour</p>
            </div>
            <div className="pricing-card">
              <h3 className="text-2xl font-semibold text-[#F9E356]">Standard</h3>
              <p className="text-gray-300">$40 per day</p>
            </div>
            <div className="pricing-card">
              <h3 className="text-2xl font-semibold text-[#F9E356]">Premium</h3>
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
              <p className="font-semibold text-[#F9E356]">John Doe</p>
            </div>
            <div className="testimonial-card">
              <p className="text-gray-300">&quot;Amazing service! So easy to use and very reliable!&quot;</p>
              <p className="font-semibold text-[#F9E356]">Jane Smith</p>
            </div>
            <div className="testimonial-card">
              <p className="text-gray-300">&quot;Amazing service! So easy to use and very reliable!&quot;</p>
              <p className="font-semibold text-[#F9E356]">Mark Williams</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action (CTA) Section */}
      <div className="bg-[#F9E356] py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Ride?</h2>
          <p className="text-lg text-black mb-8">Get started today and enjoy the ride!</p>
          <button className="bg-black text-[#F9E356] border border-[#F9E356] py-3 px-6 rounded-lg hover:bg-[#F9E356] hover:text-black hover:border-black transition-colors">
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