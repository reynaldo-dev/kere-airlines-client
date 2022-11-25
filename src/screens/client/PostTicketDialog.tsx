import React, { Dispatch, SetStateAction } from 'react';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Snackbar,
	TextField,
	Typography,
} from '@mui/material';
import * as yup from 'yup';
import { Field, Form, Formik } from 'formik';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Label } from '@mui/icons-material';
import { createTicket } from '../../redux/actions/ticket.client';
import { Destination } from '../destinations';
import { useNavigate } from 'react-router-dom';
interface Props {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
	place: Destination;
}

const schema = yup.object().shape({
	fromdate: yup.date().required('From date is required'),
	todate: yup.date().required('To date is required'),
	destination: yup.string().required('Destination is required'),
	motive: yup.string().required('Motive is required'),
});

export const PostTicketDialog = ({ open, setOpen, place }: Props) => {
	const { client } = useSelector((state: RootState) => state.client);
	const ticketInfo = useSelector((state: RootState) => state.ticket);

	const navigate = useNavigate();

	const dispatch = useDispatch();
	return (
		<Dialog open={open} onClose={() => setOpen(false)}>
			<DialogTitle>Genera tu ticket de este vuelo</DialogTitle>
			<DialogContent>
				<DialogContentText>
					Necesitamos que completes algunos datos
				</DialogContentText>

				<Formik
					initialValues={{
						id_client: client?.id_client,
						fromdate: '',
						todate: '',
						destination: place.name,
						motive: '',
					}}
					validationSchema={schema}
					onSubmit={(values) => {
						if (!ticketInfo.client) {
							dispatch(createTicket(values));
							setOpen(false);
						} else {
							alert('Ya tienes un viaje pendiente');
							setOpen(false);
						}
					}}
				>
					{({
						handleSubmit,
						handleChange,
						values,
						errors,
						touched,
						submitForm,
					}) => (
						<Form>
							<Box
								width="100%"
								display="flex"
								justifyContent="center"
								alignItems="center"
								my={2}
							>
								<TextField
									size="small"
									name="destination"
									onChange={handleChange}
									value={values.destination}
									label="Destination"
									error={!!errors.destination}
									helperText={errors.destination}
								/>
							</Box>

							<Box
								width="100%"
								display="flex"
								justifyContent="center"
								alignItems="center"
								my={2}
							>
								<TextField
									size="small"
									name="motive"
									onChange={handleChange}
									value={values.motive}
									label="Motive"
									error={!!errors.motive}
									helperText={errors.motive}
								/>
							</Box>

							<Box
								width="100%"
								display="flex"
								justifyContent="center"
								alignItems="center"
								p={1}
								gap={2}
								my={2}
							>
								<Typography
									variant="body1"
									color="textSecondary"
								>
									From Date
								</Typography>
								<input
									className="w-1/2 focus:outline-none"
									required
									value={values.fromdate}
									onChange={handleChange}
									type="date"
									name="fromdate"
									id=""
									min={new Date().toISOString().split('T')[0]}
								/>
							</Box>

							<Box
								width="100%"
								display="flex"
								justifyContent="center"
								alignItems="center"
								gap={2}
								my={2}
							>
								<Typography
									variant="body1"
									color="textSecondary"
								>
									To Date
								</Typography>
								<input
									className="w-1/2 focus:outline-none"
									required
									type="date"
									name="todate"
									value={values.todate}
									onChange={handleChange}
									id=""
									min={new Date().toISOString().split('T')[0]}
								/>
							</Box>

							<Button onClick={() => setOpen(false)}>
								Cancel
							</Button>
							<Button type="submit">Generar</Button>
						</Form>
					)}
				</Formik>
			</DialogContent>
		</Dialog>
	);
};
