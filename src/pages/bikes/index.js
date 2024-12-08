// pages/bikes/index.js
import { useEffect, useState } from 'react';
import { useBikes } from '@/hooks/useBikes';
import { toast } from 'react-hot-toast';
import Image from 'next/image';

const Bikes = () => {
    const { bikes, loading, error, getAllBikes, getFilteredBikes } = useBikes();
    const [filters, setFilters] = useState({
        category: '',
        priceRange: '',
        sortBy: ''
    });

    useEffect(() => {
        fetchBikes();
    }, []);

    const fetchBikes = async () => {
        try {
            await getAllBikes();
        } catch (error) {
            console.error('Error fetching bikes:', error);
        }
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const applyFilters = async () => {
        try {
            await getFilteredBikes(filters);
        } catch (error) {
            console.error('Error applying filters:', error);
        }
    };

    if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    if (error) return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;
     console.log("bikes", bikes)
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
                        <select 
                            name="category"
                            value={filters.category}
                            onChange={handleFilterChange}
                            className="p-2 border rounded-md text-black"
                        >
                            <option value="">All Categories</option>
                            <option value="sports">Sports</option>
                            <option value="cruiser">Cruiser</option>
                            <option value="adventure">Adventure</option>
                        </select>
                        {/* Other filters */}
                        <button 
                            onClick={applyFilters}
                            className="bg-[#F9E356] text-black py-2 px-4 rounded-md hover:bg-[#F9E356]/90 transition-colors font-medium"
                        >
                            Apply Filters
                        </button>
                    </div>
                </div>

                {/* Bikes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {bikes?.data?.map((bike) => (
                        <div key={bike.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="relative h-48">
                                <Image
                                    src= '/bikes/bike1.jpg'
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