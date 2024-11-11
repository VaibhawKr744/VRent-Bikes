import React from 'react';
import Link from 'next/link';
import { Menu } from '@headlessui/react';
import { Menu as MenuIcon } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            {/* Replace with your logo image */}
            <img
              src="/logo.jpeg" // Update the path to your logo
              alt="V'Rent Logo"
              className="h-8 w-8"
            />
            <Link href="/" className="text-2xl font-bold text-yellow-600 hover:text-yellow-700">
              V'Rent
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/bikes" className="text-yellow-600 hover:text-yellow-700">
              Bikes
            </Link>
            <Link href="/locations" className="text-yellow-600 hover:text-yellow-700">
              Locations
            </Link>
            <Link href="/about" className="text-yellow-600 hover:text-yellow-700">
              About
            </Link>
            <Link href="/contact" className="text-yellow-600 hover:text-yellow-700">
              Contact
            </Link>
            <Link 
              href="/login" 
              className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Menu as="div" className="relative inline-block text-left">
              <Menu.Button className="p-2 text-yellow-600">
                <MenuIcon className="h-6 w-6" />
              </Menu.Button>
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
