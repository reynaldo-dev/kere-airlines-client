import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { api } from '../../api/api';

interface Payload {
	email: string;
}

interface PostClient {
	name: string;
	lastname: string;
	email: string;
	dir: string;
	dui: string;
	id_gender: number;
}
export const getClient = createAsyncThunk(
	'client/getClient',
	async (payload: Payload) => {
		const response = await api.get(`client/${payload.email}`, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
		});

		if (!response || response.status !== 200) {
			return {
				client: null,
			};
		}
		return {
			client: response?.data,
		};
	},
);

export const postClient = createAsyncThunk(
	'client/postClient',
	async (payload: PostClient, { dispatch }) => {
		const response = await api.post(`client`, payload, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
		});

		if (!response || response.status !== 200) {
			console.log(response);
		}
		dispatch(getClient({ email: payload.email }));
	},
);
