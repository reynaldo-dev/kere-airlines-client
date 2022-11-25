import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { FontFamily } from '../../../utils/fonts';
import { Link } from 'react-router-dom';
import PlaceIcon from '@mui/icons-material/Place';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';

interface Props {
	isOpen: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SideBar = ({ isOpen, setOpen }: Props) => {
	const linkdata = [
		{
			route: 'destinations',
			name: 'Destinations',
			icon: <PlaceIcon color="info" sx={{ color: 'white' }} />,
		},
		{
			route: 'ticket',
			name: 'Ticket',
			icon: <AirplaneTicketIcon sx={{ color: 'white' }} />,
		},
	];
	const variants = {
		open: { x: 0 },
		closed: { x: -1000 },
	};
	return (
		<motion.div
			animate={isOpen ? 'open' : 'closed'}
			transition={{ duration: 0.5, bounce: 0 }}
			variants={variants}
			style={styles as React.CSSProperties}
		>
			<Typography
				variant="h6"
				fontFamily={FontFamily.Rubik}
				sx={{
					color: 'rgba(0, 0, 50, 0.5)',
				}}
			>
				Kere Clients
			</Typography>

			<Box
				display="flex"
				flexDirection="column"
				justifyContent="center"
				alignItems="center"
				gap="1rem"
				width="100%"
				mt={5}
			>
				{linkdata.map((link, index) => (
					<Box
						width="100%"
						p={1}
						display="flex"
						justifyContent="center"
						alignItems="center"
						gap={1}
						sx={{
							'&:hover': {
								backgroundColor: 'white',
								borderRadius: '10px 0 0 10px',
							},
						}}
					>
						{link.icon}
						<Typography
							variant="caption"
							fontSize={14}
							sx={{
								textDecoration: 'none',
							}}
						>
							<Link
								style={{
									textDecoration: 'none',
									color: 'white',
								}}
								to={link.route}
								key={index}
								onClick={() => {
									setOpen(false);
								}}
							>
								{link.name}
							</Link>
						</Typography>
					</Box>
				))}
			</Box>
		</motion.div>
	);
};

const styles = {
	width: '20%',
	position: 'absolute',
	bottom: 0,
	top: '5rem',
	backgroundColor: '#6573c3',
	border: '1px solid rgba(255, 255, 255, 0.3)',
	display: 'flex',
	alignItems: 'center',
	flexDirection: 'column',
};
