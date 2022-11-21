import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api/api';

interface LoginUserPayload {
	email: string;
	password: string;
}

interface RegisterUserPayload {
	email: string;
	password: string;
	username: string;
	id_role: number;
}
export const login = createAsyncThunk(
	'auth/login',
	async (payload: LoginUserPayload) => {
		try {
			const response = await api.post('/auth/login', payload);
			localStorage.setItem('token', response?.data?.access_token);

			return {
				isAuth: true,
				user: response?.data?.user,
				error: '',
				isError: false,
			};
		} catch (error) {
			return {
				isAuth: false,
				user: null,
				error: 'Credenciales incorrectas',
				isError: true,
			};
		}

		//return response.data
	},
);

export const register = createAsyncThunk(
	'auth/register',
	async (payload: RegisterUserPayload, { dispatch }) => {
		try {
			const response = await api.post('/user', payload);
			if (response.status !== 201) {
				return {
					isError: true,
				};
			}
			dispatch(
				login({ email: payload.email, password: payload.password }),
			);
		} catch (error) {
			console.log(error);
			return {
				isError: true,
			};
		}

		//return response.data
	},
);

export const whoami = createAsyncThunk(
	'auth/whoami',
	async (undefined, { dispatch }) => {
		const token = localStorage.getItem('token') || null;
		try {
			if (token) {
				const response = await api.get('/auth/whoami', {
					headers: {
						Authorization: `Bearer ${localStorage.getItem(
							'token',
						)}`,
					},
				});

				return {
					isAuth: true,
					user: response?.data,
					error: '',
					isError: false,
				};
			}
			return {
				isAuth: false,
				user: null,
				error: '',
				isError: false,
			};
		} catch (error) {
			return {
				isAuth: false,
				user: null,
				error: '',
				isError: true,
			};
		}

		//return response.data
	},
);
