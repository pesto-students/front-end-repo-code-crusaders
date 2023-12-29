import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosConfig from '../../utils/axiosConfig';

export const getProducts = createAsyncThunk('lab/product', async (query, { rejectWithValue }) => {
	try {
		const sortBy = 'price';
		const { page, limit, lab } = query;
		const response = await axiosConfig.get(`/v1/product?lab=${lab}&sortBy=${sortBy}&page=${page}&limit=${limit}`);

		return response.data;
	} catch (error) {
		return rejectWithValue({
			error: error.response.data ? error.response.message : error.message
		});
	}
});

export const getProduct = createAsyncThunk('lab/product/:productId', async (query, { rejectWithValue }) => {
	try {
		const productId = '';
		const response = await axiosConfig.get(`/v1/product/${productId}`);

		return await response.data;
	} catch (error) {
		return rejectWithValue({
			error: error.response.data ? error.response.message : error.message
		});
	}
});

export const createProduct = createAsyncThunk('lab/product', async (body, { rejectWithValue }) => {
	try {
		const response = await axiosConfig.post('/v1/product', body);

		return await response.data;
	} catch (error) {
		return rejectWithValue({
			error: error.response.data ? error.response.message : error.message
		});
	}
});
