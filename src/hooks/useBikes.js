// src/hooks/useBikes.js
import { useState } from 'react';
import { bikesApi } from '../services/api/bikes';
import { toast } from 'react-hot-toast';

export const useBikes = () => {
    const [bikes, setBikes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getAllBikes = async (params) => {
        setLoading(true);
        setError(null);
        try {
            const response = await bikesApi.getAllBikes(params);
            setBikes(response.data);
            return response.data;
        } catch (err) {
            const errorMessage = err.response?.data?.message || 'Failed to fetch bikes';
            setError(errorMessage);
            toast.error(errorMessage);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const getBikeById = async (id) => {
        setLoading(true);
        setError(null);
        try {
            const response = await bikesApi.getBikeById(id);
            return response.data;
        } catch (err) {
            const errorMessage = err.response?.data?.message || 'Failed to fetch bike details';
            setError(errorMessage);
            toast.error(errorMessage);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const getFilteredBikes = async (filters) => {
        setLoading(true);
        setError(null);
        try {
            const response = await bikesApi.getFilteredBikes(filters);
            setBikes(response.data);
            return response.data;
        } catch (err) {
            const errorMessage = err.response?.data?.message || 'Failed to fetch filtered bikes';
            setError(errorMessage);
            toast.error(errorMessage);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return {
        bikes,
        loading,
        error,
        getAllBikes,
        getBikeById,
        getFilteredBikes
    };
};
