import React from 'react';
import { Box } from '@mui/system';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../../components/admin/dashboard/AppBar';
import { Clients } from '../../components/admin/tables/Clients';
import { Tickets } from '../../components/admin/tables/Tickets';

export const DashBoard = () => {
	return (
		<div>
			<AppBar />
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				flexDirection="column"
			>
				<Box mt="5rem" width="60%">
					<Clients />
				</Box>

				<Box mt="5rem" width="60%">
					<Tickets />
				</Box>
			</Box>
		</div>
	);
};
