import React from 'react';
import { useGetTicketsQuery } from '../../../redux/admin/queries';
import DataTable, { TableColumn } from 'react-data-table-component';

interface DataRow {
	id_ticket: number;
	destination: string;
	fromdate: string;
	todate: string;
	motive: string;
	id_client: number;
}

export const Tickets = () => {
	const { data, isError } = useGetTicketsQuery();

	const columns: TableColumn<DataRow>[] = [
		{
			name: 'ID',
			selector: (row) => row.id_ticket,
		},
		{
			name: 'Cliente ID',
			selector: (row) => row.id_client,
		},
		{
			name: 'Destino',
			selector: (row) => row.destination,
		},
		{
			name: 'Desde',
			selector: (row) => row.fromdate,
		},

		{
			name: 'Hasta',
			selector: (row) => row.todate,
		},
		{
			name: 'Motivo',
			selector: (row) => row.motive,
		},
	];
	console.log(data);
	return (
		<DataTable
			columns={columns}
			data={data}
			title="Vuelos Kere"
			striped
			highlightOnHover
			pagination
		/>
	);
};
