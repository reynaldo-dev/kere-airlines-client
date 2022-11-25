import React from 'react';
import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer';
const styles = StyleSheet.create({
	page: {
		flexDirection: 'row',
		backgroundColor: '#E4E4E4',
	},
	section: {
		margin: 10,
		padding: 10,
		flexGrow: 1,
	},
});

export const Ticket = () => {
	return (
		<div>
			<h1>pdf</h1>
		</div>
	);
};
