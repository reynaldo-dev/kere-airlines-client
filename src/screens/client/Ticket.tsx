import { Alert, Box, Button, Snackbar, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../../redux/store';
import { FontFamily } from '../../utils/fonts';
import { Destination, destinations } from '../destinations';
import { PostTicketDialog } from './PostTicketDialog';

export const Ticket = () => {
	const { destination } = useParams();
	const [place, setPlace] = React.useState<Destination>();
	const [open, setOpen] = React.useState<boolean>(false);
	const [openSnackbar, setOpenSnackbar] = React.useState(false);
	const ticketInfo = useSelector((state: RootState) => state.ticket);

	React.useEffect(() => {
		const place: Destination = destinations.find(
			(d) => d.name === destination,
		) as Destination;
		setPlace(place);
	}, []);

	React.useEffect(() => {
		if (ticketInfo.client) {
			setOpenSnackbar(true);
		}
	}, [ticketInfo.client]);

	return (
		<Box
			sx={{
				backgroundImage: `url(${place?.image})`,
				width: '100%',
				height: '100vh',
				backgroundSize: 'cover',
				backgroundPosition: '50% 50%',
				backgroundRepeat: 'no-repeat',
				backgroundAttachment: 'fixed',
			}}
		>
			<Snackbar
				open={openSnackbar}
				autoHideDuration={6000}
				onClose={() => setOpenSnackbar(false)}
			>
				<Alert
					onClose={() => setOpenSnackbar(false)}
					severity="success"
					sx={{ width: '100%' }}
				>
					Ticket generado correctamente
				</Alert>
			</Snackbar>
			<Box
				width="100%"
				height="100%"
				bgcolor="rgba(0, 0, 0, 0.6)"
				display="flex"
				justifyContent="center"
				alignItems="center"
				flexDirection="column"
			>
				<Box>
					<Typography
						color="rgba(255, 255, 255, 0.5)"
						variant="h4"
						p={2}
						fontFamily={FontFamily.Rubik}
					>
						{place?.name}
					</Typography>

					<Typography
						color="rgba(255, 255, 255, 0.5)"
						variant="h2"
						p={2}
						fontFamily={FontFamily.Rubik}
					>
						${place?.price}
					</Typography>
				</Box>
				<Button onClick={() => setOpen(!open)}>
					Obtén tu ticket ahora
				</Button>
				{open ? (
					<PostTicketDialog
						open={open}
						setOpen={setOpen}
						place={place as Destination}
					/>
				) : null}
			</Box>
		</Box>
	);
};
