import { createSlice } from '@reduxjs/toolkit';
import {
	getOrders, createOrder, updatOrder
} from './orderAction';

const initialState = {
	loading: false,
	orders: [],
	pagination: {
		totalResult: 0,
		totalPages: 0,
	},
	error: null,
	success: false,
	order: null,
};

const orderSlice = createSlice({
	name: 'order',
	initialState,
	reducers: {
		resetSuccess: (state) => {
			state.success = false;
			state.error = null;
		}
	},
	extraReducers: {
		[getOrders.pending]: (state) => {
			state.loading = true;
			state.error = null;
		},
		[getOrders.fulfilled]: (state, action) => {
			state.loading = false;
			state.pagination = {
				totalPages: action.payload.totalPages,
				totalResult: action.payload.totalResults,
			};
			state.orders = action.payload.results;
			state.error = null;
		},
		[getOrders.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload.error;
		},

		[createOrder.pending]: (state) => {
			state.loading = true;
			state.success = false;
			state.error = null;
		},
		[createOrder.fulfilled]: (state, action) => {
			state.loading = false;
			state.success = true;
			state.error = null;
			state.order = action.payload;
		},
		[createOrder.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload.error;
			state.success = false;
		},

		[updatOrder.pending]: (state) => {
			state.loading = true;
			state.success = false;
			state.error = null;
		},
		[updatOrder.fulfilled]: (state, action) => {
			state.loading = false;
			state.success = true;
			state.error = null;
			state.orders = state.orders.filter((order) => order._id !== action.payload._id);
		},
		[updatOrder.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload.error;
			state.success = false;
		}
	},
});

export default orderSlice.reducer;

export const { resetSuccess } = orderSlice.actions;
