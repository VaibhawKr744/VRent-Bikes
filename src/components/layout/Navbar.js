// src/components/layout/Navbar.js
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu as MenuIcon, X, MapPin, LogOut, User } from 'lucide-react';
import Image from 'next/image';
import PhoneModal from '../auth/PhoneModal';
import OTPModal from '../auth/OTPModal';
import { useAuth } from '@/hooks/useAuth';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showPhoneModal, setShowPhoneModal] = useState(false);
    const [showOTPModal, setShowOTPModal] = useState(false);
    const [loading, setLoading] = useState(false);

    const { user, isAuthenticated, sendOTP, verifyOTP, logout } = useAuth();

    const handleLoginClick = () => {
        setShowPhoneModal(true);
    };

    const handlePhoneSubmit = async (phone) => {
        try {
            setLoading(true);
            await sendOTP(phone);
            setShowPhoneModal(false);
            setShowOTPModal(true);
        } catch (error) {
            console.error('Error sending OTP:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleOTPSubmit = async (otp) => {
        try {
            setLoading(true);
            await verifyOTP(otp);
            setShowOTPModal(false);
        } catch (error) {
            console.error('Error verifying OTP:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        logout();
    };

    const handleOTPBack = () => {
        setShowOTPModal(false);
        setShowPhoneModal(true);
    };

    return (
        <>
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
                            <div className="flex items-center gap-4">
                                {isAuthenticated && user && (
                                    <>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleLogout();
                                            }}
                                            className="bg-black text-[#F9E356] px-4 py-2 rounded-md border border-[#ffc200] hover:bg-[#ffc200] hover:text-black transition-colors flex items-center gap-2"
                                        >
                                            <LogOut className="h-4 w-4" />
                                            Logout
                                        </button>
                                        <button className="bg-black text-[#F9E356] px-4 py-2 rounded-md border border-[#ffc200] hover:bg-[#ffc200] hover:text-black transition-colors flex items-center gap-2">
                                            <User className="h-4 w-4" />
                                            {user.phone}
                                        </button>
                                    </>
                                )}
                                {!isAuthenticated && (
                                    <button
                                        onClick={handleLoginClick}
                                        className="bg-black text-[#F9E356] px-4 py-2 rounded-md border border-[#ffc200] hover:bg-[#ffc200] hover:text-black transition-colors"
                                    >
                                        Login
                                    </button>
                                )}
                            </div>
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
                        className={`md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out ${
                            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
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
                            <div className="py-2">
                                {isAuthenticated && user && (
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleLogout();
                                        }}
                                        className="bg-black text-[#F9E356] px-4 py-2 rounded-md border border-[#ffc200] hover:bg-[#ffc200] hover:text-black transition-colors flex items-center gap-2"
                                    >
                                        <LogOut className="h-4 w-4" />
                                        Logout
                                    </button>
                                )}
                                {!isAuthenticated && (
                                    <button
                                        onClick={handleLoginClick}
                                        className="bg-black text-[#F9E356] px-4 py-2 rounded-md border border-[#ffc200] hover:bg-[#ffc200] hover:text-black transition-colors"
                                    >
                                        Login
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Auth Modals */}
            <PhoneModal
                isOpen={showPhoneModal}
                onClose={() => setShowPhoneModal(false)}
                onSubmit={handlePhoneSubmit}
                loading={loading}
            />
            <OTPModal
                isOpen={showOTPModal}
                onClose={() => setShowOTPModal(false)}
                onSubmit={handleOTPSubmit}
                onBack={handleOTPBack}
                loading={loading}
            />
        </>
    );
};

export default Navbar;