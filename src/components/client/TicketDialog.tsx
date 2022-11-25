import { Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { FontFamily } from '../../utils/fonts';

interface Props {
	see: boolean;
	setSee: React.Dispatch<React.SetStateAction<boolean>>;
}
export const TicketDialog = ({ see, setSee }: Props) => {
	const ticketInfo = useSelector((state: RootState) => state.ticket);

	return (
		<Dialog open={see} onClose={() => setSee(false)}>
			<DialogTitle>Kere Airlines ticket</DialogTitle>
			<DialogContent>
				<Box>
					<Typography fontFamily={FontFamily.Rubik}>
						Ticket# {ticketInfo?.id_ticket}
					</Typography>
					<Typography fontFamily={FontFamily.Rubik}>
						{ticketInfo?.client?.name}{' '}
						{ticketInfo?.client?.lastname}
					</Typography>
					<Typography fontFamily={FontFamily.Rubik}>
						Destino: {ticketInfo?.destination}
					</Typography>
					<Typography fontFamily={FontFamily.Rubik}>
						Salida: {ticketInfo?.fromdate}
					</Typography>
					<Typography fontFamily={FontFamily.Rubik}>
						Vuelta: {ticketInfo?.todate}
					</Typography>
				</Box>
			</DialogContent>
		</Dialog>
	);
};
