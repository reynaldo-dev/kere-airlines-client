import { Box, Button, Link, Snackbar, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontFamily } from '../../utils/fonts';
import { destinations } from '../destinations';

export const Client = () => {
	const navigation = useNavigate();

	return (
		<Box>
			{destinations.map((destination, index) => {
				return (
					<Box
						key={destination.name}
						sx={{
							backgroundImage: `url(${destination.image})`,
							width: '100%',
							height: '100vh',
							backgroundSize: 'cover',
							backgroundPosition: '50% 50%',
							backgroundRepeat: 'no-repeat',
							backgroundAttachment: 'fixed',
						}}
					>
						<Box
							width="100%"
							height="100%"
							bgcolor="rgba(0, 0, 0, 0.6)"
							display="flex"
							justifyContent="center"
							alignItems="center"
							flexDirection="column"
						>
							<Typography
								color="rgba(255, 255, 255, 0.5)"
								variant="h4"
								p={2}
								fontFamily={FontFamily.Rubik}
							>
								{destination.name}
							</Typography>

							<Button
								color="primary"
								variant="contained"
								sx={{ zIndex: 0 }}
								onClick={() =>
									navigation(`ticket/${destination.name}`)
								}
							>
								<Typography>Get Ticket</Typography>
							</Button>
						</Box>
					</Box>
				);
			})}
		</Box>
	);
};
