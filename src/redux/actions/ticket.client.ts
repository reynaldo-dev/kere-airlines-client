import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api/api';

export const createTicket = createAsyncThunk(
	'ticket/createTicket',
	async (ticket: any) => {
		try {
			const response = await api.post('/ticket', ticket, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`,
				},
			});

			return {
				client: response.data.client,
				destination: response.data.destination,
				fromdate: response.data.fromdate,
				todate: response.data.todate,
				id_ticket: response.data.id_ticket,
				motive: response.data.motive,
			};
		} catch (error) {
			console.log(error);
		}
	},
);

export interface PostTicketRootObject {
	id_ticket: number;
	id_client: number;
	fromdate: string;
	todate: string;
	destination: string;
	motive: string;
	createdat: string;
	client: Client;
}

export interface Client {
	id_client: number;
	name: string;
	lastname: string;
	dir: string;
	dui: string;
	id_gender: number;
	email: string;
	id_user: number;
}
