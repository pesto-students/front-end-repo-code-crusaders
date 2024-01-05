import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosConfig from '../../utils/axiosConfig';

export const getLabs = createAsyncThunk('lab/products', async (query, { rejectWithValue }) => {
	try {
		// const sortBy = 'created';
		const {
			page, limit,
		} = query;
		const queryURL = `page=${page}&limit=${limit}`;

		const response = await axiosConfig.get(`/v1/lab?${queryURL}`);

		return response.data;
	} catch (error) {
		return rejectWithValue({
			error: error.response.data ? error.response.data.message : error.message
		});
	}
});
