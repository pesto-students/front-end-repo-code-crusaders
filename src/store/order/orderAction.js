import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosConfig from '../../utils/axiosConfig';

export const getOrders = createAsyncThunk('lab/products', async (query, { rejectWithValue }) => {
	try {
		const sortBy = 'price';
		const {
			page, limit, lab, active, search
		} = query;
		let queryURL = `sortBy=${sortBy}&page=${page}&limit=${limit}`;
		queryURL += lab ? `&lab=${lab}` : '';
		queryURL += search ? `&search=${search}` : '';
		queryURL += active !== undefined ? `&active=${active}` : '';

		const response = await axiosConfig.get(`/v1/order?${queryURL}`);

		return response.data;
	} catch (error) {
		return rejectWithValue({
			error: error.response.data ? error.response.message : error.message
		});
	}
});

export const getProductCount = createAsyncThunk('/lab/products/count', async (_, { rejectWithValue }) => {
	try {
		const response = await axiosConfig.get('/v1/product/count');
		// console.log('tabs balues ,,,,', response.data);
		// const count = response.data;

		return response.data;
	} catch (error) {
		return rejectWithValue({
			error: error.response.data ? error.response.message : error.message
		});
	}
});

export const createProduct = createAsyncThunk('lab/product', async (body, { rejectWithValue }) => {
	try {
		const response = await axiosConfig.post('/v1/product', body);

		const product = response.data;
		product.active = true;
		return product;
	} catch (error) {
		return rejectWithValue({
			error: error.response.data ? error.response.message : error.message
		});
	}
});
