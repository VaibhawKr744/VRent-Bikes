// src/hooks/useAuth.js
import { useState, useEffect } from 'react';
import { axiosInstance } from '../services/axios';
import { toast } from 'react-hot-toast';

export const useAuth = () => {
    const [user, setUser] = useState(null);
    const [sessionId, setSessionId] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [phoneNumber, setPhoneNumber] = useState('');

    // Check for existing auth on mount
    useEffect(() => {
        const token = localStorage.getItem('token');
        const userData = localStorage.getItem('user');
        if (token && userData) {
            setUser(JSON.parse(userData));
            setIsAuthenticated(true);
            // Update axios headers
            axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
        setLoading(false);
    }, []);

    const sendOTP = async (phone) => {
        try {
            setLoading(true);
            // Changed from '/api/proxy/auth/send-otp' to '/auth/send-otp'
            const response = await axiosInstance.post('/auth/send-otp', {
                phone
            });
            
            if (response.data.success) {
                setSessionId(response.data.sessionId);
                setPhoneNumber(phone);
                toast.success('OTP sent successfully');
                return true;
            }
        } catch (error) {
            const message = error.response?.data?.message || 'Failed to send OTP';
            toast.error(message);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const verifyOTP = async (otp) => {
        try {
            setLoading(true);
            // Changed from '/api/proxy/auth/verify-otp' to '/auth/verify-otp'
            const response = await axiosInstance.post('/auth/verify-otp', {
                sessionId,
                otp,
                phone: phoneNumber
            });

            if (response.data.success) {
                const { token, user } = response.data;
                
                // Save to localStorage
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user));
                
                // Update state
                setUser(user);
                setIsAuthenticated(true);
                
                // Update axios headers
                axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                
                toast.success('Login successful');
                return true;
            }
        } catch (error) {
            const message = error.response?.data?.message || 'Invalid OTP';
            toast.error(message);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        // Clear storage
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        
        // Reset state
        setUser(null);
        setIsAuthenticated(false);
        setSessionId(null);
        setPhoneNumber('');
        
        // Clear axios headers
        delete axiosInstance.defaults.headers.common['Authorization'];
        
        toast.success('Logged out successfully');
    };

    return {
        user,
        loading,
        isAuthenticated,
        phoneNumber,
        sessionId,
        sendOTP,
        verifyOTP,
        logout
    };
};