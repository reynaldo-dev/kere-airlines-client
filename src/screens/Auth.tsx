import { Box, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { FontFamily } from '../utils/fonts';

export const Auth = () => {
	return (
		<Box
			height={'100vh'}
			width={'100%'}
			display="flex"
			justifyContent="center"
			alignItems="center"
			flexDirection="column"
			sx={{
				backgroundImage:
					'url(https://wallpaperaccess.com/full/185289.jpg)',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
		>
			<Box
				width={'100%'}
				height={'100vh'}
				display="flex"
				justifyContent="center"
				alignItems="center"
				flexDirection="column"
				bgcolor={'rgba(0,0,0,0.5)'}
			>
				<Box
					px={5}
					py={7}
					borderRadius={5}
					boxShadow={5}
					mt={5}
					sx={{
						backgroundColor: 'rgba(0,0,0,0.3)',
					}}
				>
					<Outlet />
				</Box>
			</Box>
		</Box>
	);
};
