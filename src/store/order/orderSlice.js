import { createSlice } from '@reduxjs/toolkit';
import {
	getOrders,
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
};

const orderSlice = createSlice({
	name: 'order',
	initialState,
	reducers: {
		// setProductCount: (state, action) => {
		// 	console.log('why not update tabs balues ,,,,', action);
		// 	state.tabsCount = action.payload;
		// }
	},
	extraReducers: {
		[getOrders.pending]: (state) => {
			state.loading = true;
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

	},
});

export default orderSlice.reducer;

// export const { setProductCount } = authSlice.actions;
