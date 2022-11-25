export interface Destination {
	name: string;
	image: string;
	price: number;
}

export const destinations: Destination[] = [
	{
		name: 'Buenos Aires, Argentina',
		image: 'https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/EWRWZLV7FZEM7C24TIEPFBJCP4.jpg',
		price: 1200,
	},
	{
		name: 'Cairo, Egypt',
		image: 'https://www.egiptoexclusivo.com/wp-content/uploads/2020/12/vista-aera-del-cairo.jpg',
		price: 900,
	},
	{
		name: 'Lisbon, Portugal',
		image: 'https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Portugal/Lisbon/lisbon-lead-image.jpg?imwidth=680',
		price: 1100,
	},
	{
		name: 'New York, USA',
		image: 'https://a.cdn-hotels.com/gdcs/production101/d154/ee893f00-c31d-11e8-9739-0242ac110006.jpg?impolicy=fcrop&w=800&h=533&q=medium',
		price: 1700,
	},
	{
		name: 'Oslo, Norway',
		image: 'https://utopiaurbana.city/wp-content/uploads/2022/06/Oslo.png',
		price: 1300,
	},
	{
		name: 'Paris, France',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1200px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg',
		price: 1500,
	},
	{
		name: 'Rio de Janeiro, Brazil',
		image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6f/5f/fa.jpg',
		price: 1400,
	},
	{
		name: 'Rome, Italy',
		image: 'https://cometeelmundo.net/sites/default/files/styles/760x430/public/media/blog/panteon-de-roma-por-la-noche.jpg?h=e6a1dec0&itok=ve7ruVc6',
		price: 1600,
	},
	{
		name: 'Tokyo, Japan',
		image: 'https://www.gotokyo.org/es/plan/tokyo-outline/images/main.jpg',
		price: 2000,
	},
	{
		name: 'Toronto, Canada',
		image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/10/2f/e4/toronto.jpg?w=700&h=500&s=1',
		price: 1800,
	},
];
