// src/services/api/bikes.js
import { axiosInstance } from '../axios';

export const bikesApi = {
    getAllBikes: async (params) => {
        // Changed from '/api/proxy/bikes' to '/bikes'
        const response = await axiosInstance.get('/bikes', { params });
        return response;
    },

    getBikeById: async (id) => {
        // Changed from '/api/proxy/bikes/${id}' to '/bikes/${id}'
        const response = await axiosInstance.get(`/bikes/${id}`);
        return response;
    },

    getFilteredBikes: async (filters) => {
        // Changed from '/api/proxy/bikes' to '/bikes'
        const response = await axiosInstance.get('/bikes', { params: filters });
        return response;
    }
};