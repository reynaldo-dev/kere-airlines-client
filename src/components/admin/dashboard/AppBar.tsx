import React from 'react';
import { motion } from 'framer-motion';
import { Box } from '@mui/system';
import { Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { FontFamily } from '../../../utils/fonts';
import LogoutIcon from '@mui/icons-material/Logout';
import { logout } from '../../../redux/slices/auth.slice';

export const AppBar = () => {
	const { user } = useSelector((state: RootState) => state.auth);
	const dispatch = useDispatch();
	return (
		<Box
			sx={{ flexGrow: 1 }}
			bgcolor="#2c387e"
			display="flex"
			justifyContent="flex-end"
			alignItems="center"
			height="5rem"
			position="fixed"
			top="0"
			zIndex={1}
			width="100%"
			boxShadow={3}
		>
			<Typography
				variant="h6"
				fontFamily={FontFamily.Rubik}
				fontSize={13}
				color="white"
				bgcolor="rgba(255, 255, 255, 0.3)"
				p={1}
				borderRadius={5}
			>
				{user?.username}
			</Typography>
			<Button color="inherit" onClick={() => dispatch(logout())}>
				<LogoutIcon sx={{ color: 'white' }} />
			</Button>
		</Box>
	);
};
