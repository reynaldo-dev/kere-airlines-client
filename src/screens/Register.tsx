import React from 'react';
import { ErrorOutline, AppRegistrationRounded } from '@mui/icons-material';
import { Button, Box, Typography } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { FontFamily } from '../utils/fonts';
import { useSelector, useDispatch } from 'react-redux';
import { login, register } from '../redux/actions/auth.thunks';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { RootState } from '../redux/store';
import { useNavigate, useNavigation } from 'react-router-dom';

const RegisterSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email').required('Required'),
	password: Yup.string().min(8, 'Too Short!').required('Required'),
	username: Yup.string().min(3, 'Too Short!').required('Required'),
});

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
	props,
	ref,
) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Register = () => {
	const dispatch = useDispatch();
	const { isError } = useSelector((state: RootState) => state.user);
	return (
		<Box>
			<Typography
				color="primary"
				textAlign="center"
				variant="h6"
				mb={2}
				fontFamily={FontFamily.Rubik}
			>
				Kere Resgiter
			</Typography>
			<Formik
				initialValues={{
					email: '',
					password: '',
					username: '',
					id_role: 2,
				}}
				validationSchema={RegisterSchema}
				onSubmit={(values) => {
					dispatch(register(values));
				}}
			>
				{({ errors, touched }) => (
					<Form style={styles.form as React.CSSProperties}>
						<Box
							display="flex"
							justifyContent="center"
							flexDirection="column"
							alignItems="center"
							mb={2}
						>
							<Field
								name="username"
								type="text"
								autoComplete="off"
								placeholder="Username"
								style={styles.input as React.CSSProperties}
							/>
							{errors.username && touched.username ? (
								<Typography
									color="error.main"
									fontFamily={FontFamily.Rubik}
									variant="caption"
									display="flex"
									alignItems="center"
									m={1}
								>
									<ErrorOutline fontSize="small" />{' '}
									{errors.username}
								</Typography>
							) : null}
						</Box>

						<Box
							display="flex"
							justifyContent="center"
							flexDirection="column"
							alignItems="center"
						>
							<Field
								name="email"
								autoComplete="off"
								placeholder="Email"
								style={styles.input as React.CSSProperties}
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
							mt={2}
						>
							<Field
								name="password"
								type="password"
								placeholder="Password"
								style={styles.input as React.CSSProperties}
							/>
							{errors.password && touched.password ? (
								<Typography
									color="error.main"
									fontFamily={FontFamily.Rubik}
									variant="caption"
									display="flex"
									alignItems="center"
									m={1}
								>
									<ErrorOutline fontSize="small" />{' '}
									{errors.password}
								</Typography>
							) : null}
						</Box>
						<Button
							variant="contained"
							startIcon={<AppRegistrationRounded />}
							sx={{
								width: '100%',
								mt: 2,
								fontFamily: FontFamily.Rubik,
							}}
							type="submit"
							disabled={
								errors.email || errors.password ? true : false
							}
						>
							Register
						</Button>
						<Snackbar open={isError} autoHideDuration={6000}>
							<Alert severity="error" sx={{ width: '100%' }}>
								User already exists
							</Alert>
						</Snackbar>
					</Form>
				)}
			</Formik>
		</Box>
	);
};

const styles = {
	form: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
	},

	input: {
		borderRadius: '4px',
		padding: '10px',
		width: '100%',
		border: 'none',
		outline: 'none',
		backgroundColor: '#cbd5e1',
	},
};
