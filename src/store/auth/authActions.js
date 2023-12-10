import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosConfig from '../../utils/axiosConfig';

export const registerUser = createAsyncThunk('user/register', async ({
	firstname, lastname, email, password, role
}, { rejectWithValue }) => {
	try {
		let response;
		role = 'doctor';
		if (role === 'doctor') {
			response = await axiosConfig.post('/v1/auth/doctor/register', {
				email,
				password,
				firstname: 'krushit',
				lastname: 'dudhat',
				doctorID: 'doc123',
				hospital: 'hospital',
				addressLine1: '12, address line 1',
				landmark: 'near landmark',
				city: 'surat',
				state: 'Gujarat',
			});
		} else {
			response = await axiosConfig.post('/v1/auth/lab/register', {
				full_name: `${firstname} ${lastname}`,
				user_email: email,
				password,
				role: 'lab'
			});
		}

		return await response.data;
	} catch (error) {
		return rejectWithValue({
			error: error.response.data ? error.response.data.message : error.message
		});
	}
});

export const loginUser = createAsyncThunk('user/login', async ({
	email, password
}, { rejectWithValue }) => {
	try {
		const response = await axiosConfig.post('/v1/auth/login', {
			email: 'dkhno389@gmail.com', password: 'Test@123'
		});
		console.log(email, password);
		return await response.data;
	} catch (error) {
		return rejectWithValue({
			error: error.response.data ? error.response.data.message : error.message
		});
	}
});

export const verifyUserDetails = createAsyncThunk('/user/verify', async (_, { rejectWithValue }) => {
	try {
		const response = await axiosConfig.get('/v1/auth/verify');

		return await response.data;
	} catch (error) {
		return rejectWithValue({
			error: error.response.data ? error.response.data.message : error.message
		});
	}
});

export const logoutUser = createAsyncThunk('user/logout', async (_, { rejectWithValue }) => {
	try {
		const response = await axiosConfig.post('/v1/auth/logout', {
			refreshToken: localStorage.getItem('userRefreshToken'),
		});

		return response.data.message;
	} catch (error) {
		return rejectWithValue({
			error: error.response.data ? error.response.data.message : error.message
		});
	}
});
