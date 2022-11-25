import { Box } from '@mui/system';
import React from 'react';
import { useGetClientsQuery } from '../../../redux/admin/queries';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import DataTable, { TableColumn } from 'react-data-table-component';

interface DataRow {
	id_client: number;
	name: string;
	lastname: string;
	email: string;
	dui: string;
	dir: string;
}

export const Clients = () => {
	const { isError, data } = useGetClientsQuery();

	const columns: TableColumn<DataRow>[] = [
		{
			name: 'ID',
			selector: (row) => row.id_client,
		},
		{
			name: 'Nombre',
			selector: (row) => row.name,
		},
		{
			name: 'Apellido',
			selector: (row) => row.lastname,
		},
		{
			name: 'Email',
			selector: (row) => row.email,
		},
		{
			name: 'DUI',
			selector: (row) => row.dui,
		},
		{
			name: 'Direccion',
			selector: (row) => row.dir,
		},
	];

	return (
		<DataTable
			columns={columns}
			data={data}
			title="Clientes Kere"
			striped
			highlightOnHover
			pagination
		/>
	);
};
