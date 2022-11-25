import { Dangerous, ErrorOutline } from '@mui/icons-material';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { SetStateAction } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { FontFamily } from '../../../utils/fonts';
import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import { postClient } from '../../../redux/actions/client';

const createClientSchema = Yup.object().shape({
	name: Yup.string().required('Required'),
	lastname: Yup.string().required('Required'),
	email: Yup.string().email('Invalid email').required('Required'),
	dir: Yup.string().required('Required'),
	dui: Yup.string().required('Required'),
});
interface Props {
	open: boolean;
	setOpen: React.Dispatch<SetStateAction<boolean>>;
}
export const StartDialog = ({ open, setOpen }: Props) => {
	const { client } = useSelector((state: RootState) => state.client);
	const { user } = useSelector((state: RootState) => state.auth);

	const dispatch = useDispatch();
	return (
		<div>
			{client == null ? (
				<Dialog
					open={true}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle id="alert-dialog-title">
						<Box
							display="flex"
							justifyContent="center"
							alignItems="center"
							gap={1}
						>
							<Typography fontFamily={FontFamily.Rubik}>
								Primero lo primero, crea tu cuenta de cliente!
							</Typography>
							<Dangerous color="warning" />
						</Box>
					</DialogTitle>
					<DialogContent>
						<DialogContentText id="alert-dialog-description">
							Para poder adquirir un ticket, primero debes crear
							tu cuenta de cliente.
						</DialogContentText>
					</DialogContent>

					<Formik
						initialValues={{
							name: '',
							lastname: '',
							email: user?.email,
							dir: '',
							dui: '',
							id_gender: '',
						}}
						validationSchema={createClientSchema}
						onSubmit={(values) => {
							console.log(values);
							dispatch(postClient(values));
						}}
					>
						{({
							errors,
							touched,
							handleChange,
							handleSubmit,
							values,
						}) => (
							<Form>
								<Box
									display="flex"
									m={5}
									bgcolor="primary"
									justifyContent="center"
									alignItems="center"
									flexDirection="column"
								>
									<Box
										display="flex"
										justifyContent="center"
										flexDirection="column"
										alignItems="center"
										width="100%"
										my={2}
									>
										<Field
											name="name"
											autoComplete="off"
											placeholder="Nombre"
											style={styles.input}
										/>
										{errors.name && touched.name ? (
											<Typography
												color="error.main"
												fontFamily={FontFamily.Rubik}
												variant="caption"
												display="flex"
												alignItems="center"
												m={1}
											>
												<ErrorOutline fontSize="small" />{' '}
												{errors.name}
											</Typography>
										) : null}
									</Box>

									<Box
										display="flex"
										justifyContent="center"
										flexDirection="column"
										alignItems="center"
										width="100%"
										my={2}
									>
										<Field
											name="lastname"
											autoComplete="off"
											placeholder="Apellido"
											style={styles.input}
										/>
										{errors.lastname && touched.lastname ? (
											<Typography
												color="error.main"
												fontFamily={FontFamily.Rubik}
												variant="caption"
												display="flex"
												alignItems="center"
												m={1}
											>
												<ErrorOutline fontSize="small" />{' '}
												{errors.lastname}
											</Typography>
										) : null}
									</Box>

									<Box
										display="flex"
										justifyContent="center"
										flexDirection="column"
										alignItems="center"
										width="100%"
										my={2}
									>
										<Field
											name="email"
											autoComplete="off"
											placeholder="email"
											type="email"
											style={styles.input}
										/>
										{errors.email && touched.email ? (
											<Typography
												color="error.main"
												fontFamily={FontFamily.Rubik}
												variant="caption"
												display="flex"
												alignItems="center"
												m={1}
											>
												<ErrorOutline fontSize="small" />{' '}
												{errors.email}
											</Typography>
										) : null}
									</Box>

									<Box
										display="flex"
										justifyContent="center"
										flexDirection="column"
										alignItems="center"
										width="100%"
										my={2}
									>
										<Field
											name="dir"
											autoComplete="off"
											placeholder="Dirección"
											style={styles.input}
										/>
										{errors.dir && touched.dir ? (
											<Typography
												color="error.main"
												fontFamily={FontFamily.Rubik}
												variant="caption"
												display="flex"
												alignItems="center"
												m={1}
											>
												<ErrorOutline fontSize="small" />{' '}
												{errors.dir}
											</Typography>
										) : null}
									</Box>

									<Box
										display="flex"
										justifyContent="center"
										flexDirection="column"
										alignItems="center"
										width="100%"
										my={2}
									>
										<Field
											name="dui"
											autoComplete="off"
											placeholder="Dui"
											style={styles.input}
										/>
										{errors.dui && touched.dui ? (
											<Typography
												color="error.main"
												fontFamily={FontFamily.Rubik}
												variant="caption"
												display="flex"
												alignItems="center"
												m={1}
											>
												<ErrorOutline fontSize="small" />{' '}
												{errors.dui}
											</Typography>
										) : null}
									</Box>

									<Box
										display="flex"
										justifyContent="center"
										flexDirection="column"
										alignItems="center"
										width="100%"
										my={2}
									>
										<InputLabel id="demo-simple-select-label">
											Genero
										</InputLabel>
										<Select
											value={values.id_gender}
											label="Gender"
											name="id_gender"
											onChange={handleChange}
											required
										>
											<MenuItem value={1} defaultChecked>
												Male
											</MenuItem>
											<MenuItem value={2}>
												Female
											</MenuItem>
											<MenuItem value={3}>Other</MenuItem>
										</Select>
									</Box>
								</Box>
								<Button
									variant="contained"
									type="submit"
									fullWidth
								>
									Crear
								</Button>
							</Form>
						)}
					</Formik>
				</Dialog>
			) : null}
		</div>
	);
};

const styles = {
	input: {
		borderRadius: '4px',
		padding: '10px',
		width: '70%',
		border: '1px solid gray',
		outline: 'none',
	},
};
