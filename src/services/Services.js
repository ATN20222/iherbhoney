import axios from 'axios';

const baseURL = 'https://fakestoreapi.com'; // Replace with your actual API endpoint

const api = axios.create({
  baseURL,
});

const productService = {
    getAllProducts: async () => {
        try {
        const response = await api.get('/products');
        return response.data;
        } catch (error) {
        throw error;
        }
    },
    getProductById: async (productId) => {
        try {
        const response = await api.get(`/products/${productId}`);
        return response.data;
        } catch (error) {
        throw error;
        }
    },
};

export { productService };
