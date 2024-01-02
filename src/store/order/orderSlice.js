import { createSlice } from '@reduxjs/toolkit';
import {
	getOrders, createOrder
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

	},
	extraReducers: {
		[getOrders.pending]: (state) => {
			state.loading = true;
			state.error = null;
		},
		[getOrders.fulfilled]: (state, action) => {
			state.loading = false;
			console.log('action', action.payload);
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
		}

	},
});

export default orderSlice.reducer;

// export const { setProductCount } = authSlice.actions;
