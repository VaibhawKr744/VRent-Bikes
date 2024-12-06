// src/services/api/bikes.js
import { axiosInstance } from "../axios";

export const bikesApi = {
    getAllBikes: async (params) => {
        const response = await axiosInstance.get('/bikes', { params });
        return response.data;
    },

    getBikeById: async (id) => {
        const response = await axiosInstance.get(`/bikes/${id}`);
        return response.data;
    },

    getFilteredBikes: async (filters) => {
        const response = await axiosInstance.get('/bikes', { params: filters });
        return response.data;
    },

    // Add more methods as needed
};