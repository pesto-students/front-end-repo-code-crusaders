import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosConfig from '../../utils/axiosConfig';

export const getOrders = createAsyncThunk('orders', async (query, { rejectWithValue }) => {
	try {
		const sortBy = 'orderDate';
		const {
			page, limit, status
		} = query;
		let queryURL = `sortBy=${sortBy}&page=${page}&limit=${limit}`;
		queryURL += status !== undefined ? `&status=${status}` : '';

		const response = await axiosConfig.get(`/v1/orders?${queryURL}`);

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

		return response.data;
	} catch (error) {
		return rejectWithValue({
			error: error.response.data ? error.response.message : error.message
		});
	}
});

export const createOrder = createAsyncThunk('order/create', async (body, { rejectWithValue }) => {
	try {
		const response = await axiosConfig.post('/v1/orders', body);

		return response.data;
	} catch (error) {
		return rejectWithValue({
			error: error.response.data ? error.response.message : error.message
		});
	}
});

export const updatOrder = createAsyncThunk('/order/:orderId', async (body, { rejectWithValue }) => {
	try {
		const { orderId } = body;
		const params = {
			status: body.status
		};
		const response = await axiosConfig.patch(`/v1/orders/${orderId}`, params);

		return response.data;
	} catch (error) {
		return rejectWithValue({
			error: error.response.data ? error.response.message : error.message
		});
	}
});
