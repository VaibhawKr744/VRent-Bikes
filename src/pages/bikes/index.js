import React from 'react';
import Image from 'next/image';

const Bikes = () => {
    // Static data for now
    const bikes = [
        {
            id: 1,
            name: 'Royal Enfield Classic 350',
            model: '2023',
            imageUrl: '/bikes/bike1.jpg', // You'll need to add images in public/bikes folder
            pricePerHour: 200,
            pricePerDay: 1000,
            category: 'Cruiser'
        },
        {
            id: 2,
            name: 'KTM Duke 250',
            model: '2023',
            imageUrl: '/bikes/bike2.jpg',
            pricePerHour: 300,
            pricePerDay: 1500,
            category: 'Sports'
        },
        // Add more bikes as needed
    ];

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Hero Section */}
            <div className="bg-black text-white py-12">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-4">Available Bikes</h1>
                    <p className="text-gray-400">Choose from our wide range of bikes</p>
                </div>
            </div>

            {/* Filters Section */}
            <div className="container mx-auto px-4 py-8">
                <div className="bg-white rounded-lg shadow-md p-4 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <select className="p-2 border rounded-md text-black">
                            <option value="">All Categories</option>
                            <option value="sports">Sports</option>
                            <option value="cruiser">Cruiser</option>
                            <option value="adventure">Adventure</option>
                        </select>
                        <select className="p-2 border rounded-md text-black">
                            <option value="">Price Range</option>
                            <option value="0-500">₹0 - ₹500</option>
                            <option value="501-1000">₹501 - ₹1000</option>
                            <option value="1001+">₹1001+</option>
                        </select>
                        <select className="p-2 border rounded-md text-black">
                            <option value="">Sort By</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                            <option value="name">Name</option>
                        </select>
                        <button className="bg-[#F9E356] text-black py-2 px-4 rounded-md hover:bg-[#F9E356]/90 transition-colors font-medium">
                            Apply Filters
                        </button>
                    </div>
                </div>

                {/* Bikes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {bikes.map((bike) => (
                        <div key={bike.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="relative h-48">
                                <Image
                                    src={bike.imageUrl}
                                    alt={bike.name}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl text-black font-semibold mb-2">{bike.name}</h3>
                                <p className="text-black mb-2">Model: {bike.model}</p>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-black">Category: {bike.category}</span>
                                </div>
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-sm text-black">₹{bike.pricePerHour}/hour</span>
                                    <span className="text-sm text-black">₹{bike.pricePerDay}/day</span>
                                </div>
                                <button className="w-full bg-black text-[#F9E356] py-2 rounded-md hover:bg-gray-800 transition-colors">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Bikes;