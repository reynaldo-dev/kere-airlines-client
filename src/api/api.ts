import axios from 'axios';

export const api = axios.create({
	baseURL: 'https://handsome-insurance-production.up.railway.app/api/v1',
});
