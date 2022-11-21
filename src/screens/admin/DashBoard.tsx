import React from 'react';
import { Outlet } from 'react-router-dom';

export const DashBoard = () => {
	return (
		<div>
			DashBoard
			<Outlet />
		</div>
	);
};
