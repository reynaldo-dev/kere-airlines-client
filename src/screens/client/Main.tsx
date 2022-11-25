import React from 'react';
import {
	AppBar,
	Box,
	Button,
	IconButton,
	Snackbar,
	Toolbar,
	Typography,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { FontFamily } from '../../utils/fonts';
import LogoutIcon from '@mui/icons-material/Logout';
import { getClient } from '../../redux/actions/client';
import { StartDialog } from '../../components/client/main/StartDialog';
import { logout } from '../../redux/slices/auth.slice';
import { TicketDialog } from '../../components/client/TicketDialog';

export const Main = () => {
	const { user } = useSelector((state: RootState) => state.auth);
	const ticket = useSelector((state: RootState) => state.ticket);

	const ticketInfo = useSelector((state: RootState) => state.ticket);

	const [open, setOpen] = React.useState(false);
	const [see, setSee] = React.useState(false);

	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(getClient({ email: user?.email }));
	}, []);

	return (
		<div>
			<StartDialog open={open} setOpen={setOpen} />
			{see ? <TicketDialog see={see} setSee={setSee} /> : null}
			<motion.div
				initial={{ opacity: 0.3 }}
				whileHover={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<Box
					sx={{ flexGrow: 1 }}
					bgcolor="primary.main"
					display="flex"
					justifyContent="flex-end"
					alignItems="center"
					height="5rem"
					position="fixed"
					zIndex={1}
					top="0"
					width="100%"
					boxShadow={3}
				>
					{ticketInfo.client ? (
						<Button color="secondary" onClick={() => setSee(!see)}>
							Ver vuelo activo
						</Button>
					) : null}
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
			</motion.div>

			<Box>
				<Outlet />
			</Box>
		</div>
	);
};
