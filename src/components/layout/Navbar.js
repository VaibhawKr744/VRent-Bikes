import React, { useState } from 'react';
import Link from 'next/link';
import { Menu as MenuIcon, X, MapPin } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md fixed w-full top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center space-x-4">
                        <Image
                            src="/logo.jpeg"
                            alt="V'Rent Logo"
                            className="h-8 w-8"
                            width={32}
                            height={32}
                        />
                        <Link href="/" className="text-2xl font-bold text-black hover:text-[#ffd700]">
                            V&apos;Rent
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/bikes" className="text-gray-700 hover:text-yellow-600 transition-colors">
                            Bikes
                        </Link>
                        <Link href="/about" className="text-gray-700 hover:text-yellow-600 transition-colors">
                            About
                        </Link>
                        <Link href="/contact" className="text-gray-700 hover:text-yellow-600 transition-colors">
                            Contact
                        </Link>
                        <div className="flex items-center text-gray-700">
                            <MapPin className="h-5 w-5 text-yellow-600 mr-1" />
                            <span>Hyderabad</span>
                        </div>
                        <Link
                            href="/login"
                            className="bg-black text-[#F9E356] px-4 py-2 rounded-md border border-[#ffc200] hover:bg-[#ffc200] hover:text-black transition-colors"
                        >
                            Login
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <div className="flex items-center text-gray-700">
                            <MapPin className="h-5 w-5 text-yellow-600 mr-1" />
                            <span>Hyderabad</span>
                        </div>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 text-yellow-600 hover:text-yellow-700 transition-colors"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <div
                    className={`md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                        }`}
                >
                    <div className="px-4 py-3 space-y-3">
                        <Link
                            href="/bikes"
                            className="block text-gray-700 hover:text-yellow-600 py-2 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Bikes
                        </Link>
                        <Link
                            href="/about"
                            className="block text-gray-700 hover:text-yellow-600 py-2 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className="block text-gray-700 hover:text-yellow-600 py-2 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </Link>
                        <Link
                            href="/login"
                            className="block w-full bg-yellow-600 text-white text-center px-4 py-2 rounded-md hover:bg-yellow-700 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;