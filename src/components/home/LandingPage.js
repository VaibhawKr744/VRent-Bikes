import React, { useState } from 'react';
import { Calendar as CalendarIcon, ChevronRight, ChevronLeft } from 'lucide-react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from 'next/image';
import Link from 'next/link';

const LandingPage = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [startTime, setStartTime] = useState("9:00 AM");
  const [endTime, setEndTime] = useState("9:00 AM");
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, bikes.length));
  };

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
  const bikes = [
    {
      id: 1,
      name: 'Royal Enfield Classic 350',
      model: '2023',
      imageUrl: '/bikes/bike1.jpg',
      pricePerHour: 200,
      pricePerDay: 1000,
      category: 'Cruiser'
    },
    {
      id: 2,
      name: 'KTM Duke 250',
      model: '2023',
      imageUrl: '/bikes/bike1.jpg',
      pricePerHour: 300,
      pricePerDay: 1500,
      category: 'Sports'
    },
    {
      id: 3,
      name: 'Yamaha MT 15',
      model: '2023',
      imageUrl: '/bikes/bike1.jpg',
      pricePerHour: 250,
      pricePerDay: 1200,
      category: 'Sports'
    },
    {
      id: 1,
      name: 'Royal Enfield Classic 350',
      model: '2023',
      imageUrl: '/bikes/bike1.jpg',
      pricePerHour: 200,
      pricePerDay: 1000,
      category: 'Cruiser'
    },
    {
      id: 2,
      name: 'KTM Duke 250',
      model: '2023',
      imageUrl: '/bikes/bike1.jpg',
      pricePerHour: 300,
      pricePerDay: 1500,
      category: 'Sports'
    },
    {
      id: 3,
      name: 'Yamaha MT 15',
      model: '2023',
      imageUrl: '/bikes/bike1.jpg',
      pricePerHour: 250,
      pricePerDay: 1200,
      category: 'Sports'
    },

  ];

  const testimonials = [
    {
      id: 1,
      text: "Vehicle was in very good condition and all the staff was very humble. Our vehicle got punctured but we got full assistance and after contacting their staff. We also get the full refund. Absolutely reliable in Bangalore.",
      name: "Akshay Kumar",
      source: "Google Play Store"
    },
    {
      id: 2,
      text: "I have just made a booking, because of connecting flights being late, I needed to shift the whole booking by a day. First of all the app and website are good, I found the app especially user friendly and the inventory is good too. On top when I needed the modification of the booking I was helped exceptionally well by Denzil in customer care.",
      name: "Gaurav Kumar",
      source: "Apple App Store"
    },
    {
      id: 3,
      text: "Hello all, I had booked a bike for 14th Oct. Just then I noticed I booked for the wrong date and my ride will start in an 1 hrs time. It was indeed one of those day you know you have messed up. Thanks to my saviour Denzil from RB, in a flash he had my concern fixed and ready to move on.",
      name: "Yathi Premlal",
      source: "Google Play Store"
    },
    {
      id: 1,
      text: "Vehicle was in very good condition and all the staff was very humble. Our vehicle got punctured but we got full assistance and after contacting their staff. We also get the full refund. Absolutely reliable in Bangalore.",
      name: "Akshay Kumar",
      source: "Google Play Store"
    },
    {
      id: 2,
      text: "I have just made a booking, because of connecting flights being late, I needed to shift the whole booking by a day. First of all the app and website are good, I found the app especially user friendly and the inventory is good too. On top when I needed the modification of the booking I was helped exceptionally well by Denzil in customer care.",
      name: "Gaurav Kumar",
      source: "Apple App Store"
    },
    {
      id: 3,
      text: "Hello all, I had booked a bike for 14th Oct. Just then I noticed I booked for the wrong date and my ride will start in an 1 hrs time. It was indeed one of those day you know you have messed up. Thanks to my saviour Denzil from RB, in a flash he had my concern fixed and ready to move on.",
      name: "Yathi Premlal",
      source: "Google Play Store"
    }
  ];

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

      {/* Fleet Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black">OUR FLEET</h2>
            <div className="h-1 w-24 bg-[#F9E356] mx-auto mt-4"></div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handlePrevSlide}
              className="bg-black text-white p-3 rounded-full hover:bg-gray-800 disabled:opacity-50"
              disabled={currentSlide === 0}
            >
              <ChevronLeft size={24} />
            </button>

            <div className="overflow-hidden">
              <div
                className="flex space-x-6 transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * (320 + 24)}px)` }}
              >
                {bikes.map((bike) => (
                  <div key={bike.id} className="flex-none w-80">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="text-xl font-bold text-black mb-4 text-center">{bike.name}</h3>
                      <div className="relative h-52 mb-4">
                        <Image
                          src={bike.imageUrl}
                          alt={bike.name}
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                      <button className="w-full bg-[#F9E356] text-black font-bold py-3 rounded-md hover:bg-[#F9E356]/90">
                        BOOK NOW
                      </button>
                    </div>
                  </div>
                ))}

                <div className="flex-none w-80">
                  <div className="bg-gray-800 rounded-lg p-4 h-full flex flex-col items-center justify-center">
                    <div className="relative h-52 mb-4">
                      <Image
                        src={bikes[0].imageUrl}
                        alt="View More"
                        layout="fill"
                        objectFit="contain"
                        className="opacity-50"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white text-xl font-bold">View More</span>
                      </div>
                    </div>
                    <button className="w-full bg-[#847843] text-black font-bold py-3 rounded-md">
                      BOOK NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handleNextSlide}
              className="bg-black text-white p-3 rounded-full hover:bg-gray-800 disabled:opacity-50"
              disabled={currentSlide === bikes.length}
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <p className="text-center text-sm text-gray-500 mt-4">
            *All prices are exclusive of taxes and fuel. Images used for representation purposes only, actual color may vary.
          </p>
        </div>
      </div>




     {/* Testimonials Section */}
<div className="bg-white py-16">
 <div className="container mx-auto px-4">
   <h2 className="text-5xl font-bold text-black text-center">
     What our users have to <span className="text-[#F9E356]">say</span>
     <div className="h-1 w-24 bg-[#F9E356] mx-auto mt-4"></div>
   </h2>

   <div className="relative mt-16">
     <div className="flex space-x-8 overflow-x-auto scrollbar-hide">
       {testimonials.map((testimonial, index) => (
         <div 
           key={testimonial.id}
           className={`flex-none w-96 transform transition-all duration-500 hover:-translate-y-2 ${
             index % 2 === 0 ? 'translate-y-4' : ''
           }`}
         >
           <div className="bg-white p-8 rounded-lg shadow-lg relative">
             {/* Yellow border effect */}
             <div className="absolute -right-2 -bottom-2 w-full h-full border-2 border-[#F9E356] rounded-lg"></div>
             
             {/* Quote mark */}
             <div className="absolute -left-4 -top-4 text-[#F9E356] text-8xl font-serif leading-none">"</div>
             
             {/* Content */}
             <div className="relative">
               <p className="text-gray-800 mb-8 pt-6">{testimonial.text}</p>
               <div className="mt-4 flex items-center">
                 <div>
                   <h4 className="font-bold text-black text-lg">{testimonial.name}</h4>
                   <p className="text-sm text-gray-600">{testimonial.source}</p>
                 </div>
               </div>
             </div>

             {/* Closing quote */}
             <div className="absolute -right-4 -bottom-4 text-[#F9E356] text-8xl font-serif leading-none rotate-180">"</div>
           </div>
         </div>
       ))}
     </div>

     {/* Navigation Dots */}
     <div className="flex justify-center space-x-2 mt-8">
       <div className="w-2 h-2 rounded-full bg-[#F9E356]"></div>
       <div className="w-2 h-2 rounded-full bg-gray-300"></div>
       <div className="w-2 h-2 rounded-full bg-gray-300"></div>
     </div>

     
   </div>
 </div>
</div>

      
{/* Daily Rentals Section */}
<div className="bg-white py-24">
 <div className="container mx-auto px-4">
   <div className="grid md:grid-cols-2 gap-12 items-center">
     {/* Left Content */}
     <div className="space-y-8">
       <h2 className="text-5xl font-bold text-black">
         DAILY RENTALS
         <div className="h-1 w-24 bg-[#F9E356] mt-4"></div>
       </h2>

       <div className="space-y-6">
         <div className="transform hover:-translate-x-2 transition-transform">
           <h3 className="text-2xl font-bold text-black">FLEXIBLE</h3>
           <p className="text-black text-lg">Choose your preferred pickup and drop-off</p>
         </div>

         <div className="transform hover:-translate-x-2 transition-transform">
           <h3 className="text-2xl font-bold text-black">PRICING</h3>
           <p className="text-black text-lg">Pay only for hours used</p>
         </div>

         <div className="transform hover:-translate-x-2 transition-transform">
           <h3 className="text-2xl font-bold text-black">PACKAGES</h3>
           <p className="text-black text-lg">Lower rates for 7+, 15+, or 30+ days</p>
         </div>

         <div className="transform hover:-translate-x-2 transition-transform">
           <h3 className="text-2xl font-bold text-black">INCLUSIONS</h3>
           <p className="text-black text-lg">24/7 Roadside Assistance</p>
         </div>

         <button className="bg-[#F9E356] text-black font-bold text-lg px-8 py-3 rounded-md hover:bg-[#F9E356]/90 transform hover:scale-105 transition-all shadow-lg">
           RENT NOW
         </button>
       </div>
     </div>

     {/* Right Image */}
     <div className="relative">
       <div className="absolute -z-10 right-0 top-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#F9E356]/20 rounded-full animate-pulse"></div>
       <Image
         src="/bikes/bike2.jpg"
         alt="Sport Bike"
         width={600}
         height={400}
         className="transform hover:rotate-1 hover:scale-105 transition-all duration-500"
       />
     </div>
   </div>
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