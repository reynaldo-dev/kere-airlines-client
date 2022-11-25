import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const adminApi = createApi({
	reducerPath: 'adminApi',
	refetchOnFocus: true,
	refetchOnReconnect: true,
	refetchOnMountOrArgChange: true,
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:4000/api/v1',
		headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`,
		},
	}),
	endpoints: (builder) => ({
		getClients: builder.query<any, void>({
			query: () => '/client',
			providesTags: ['Client'],
		}),

		getTickets: builder.query<any, void>({
			query: () => '/ticket',
			providesTags: ['Tickets'],
		}),
	}),
	tagTypes: ['Client', 'Tickets'],
});

export const { useGetClientsQuery, useGetTicketsQuery } = adminApi;
