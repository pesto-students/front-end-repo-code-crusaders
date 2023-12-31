import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosConfig from '../../utils/axiosConfig';

export const getProducts = createAsyncThunk('lab/products', async (query, { rejectWithValue }) => {
	try {
		const sortBy = 'price';
		const {
			page, limit, lab, active,
		} = query;
		let queryURL = `sortBy=${sortBy}&page=${page}&limit=${limit}`;
		queryURL += lab ? `&lab=${lab}` : '';
		queryURL += active !== undefined ? `&active=${active}` : '';

		const response = await axiosConfig.get(`/v1/product?${queryURL}`);

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

export const updateProduct = createAsyncThunk('/lab/product/:productID', async (body, { rejectWithValue }) => {
	try {
		const { productId } = body;
		delete body.id;
		const response = await axiosConfig.patch(`/v1/product/${productId}`, body);

		return response.data;
	} catch (error) {
		return rejectWithValue({
			error: error.response.data ? error.response.message : error.message
		});
	}
});
