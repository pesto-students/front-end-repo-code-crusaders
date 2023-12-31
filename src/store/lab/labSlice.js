import { createSlice } from '@reduxjs/toolkit';
import {
	getLabs
} from './labAction';

const initialState = {
	loading: false,
	labs: [],
	pagination: {
		totalResult: 0,
		totalPages: 0,
	},
	lab: {},
	tabsCount: {},
	error: null,
	success: false,
};

const labSlice = createSlice({
	name: 'lab',
	initialState,
	reducers: {
	},
	extraReducers: {
		[getLabs.pending]: (state) => {
			state.loading = true;
		},
		[getLabs.fulfilled]: (state, action) => {
			state.loading = false;
			console.log('action', action.payload);
			state.pagination = {
				totalPages: action.payload.totalPages,
				totalResult: action.payload.totalResults,
			};
			state.labs = action.payload.results;
			state.error = null;
		},
		[getLabs.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload.error;
		},
	},
});

export default labSlice.reducer;
