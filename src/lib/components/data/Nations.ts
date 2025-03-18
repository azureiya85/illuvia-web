export interface Nation {
	id: number;
	nation: string;
	shortDesc: string;
	longDesc: string;
	image: string;
}

export const nations: Nation[] = [
	{
		id: 1,
		nation: 'Republic of Tharcia',
		shortDesc: 'This is a short description for Nation A',
		longDesc: 'This is a long description for Nation A',
		image:
			'https://cdnb.artstation.com/p/assets/images/images/026/402/275/large/max-bedulenko-greek-1.jpg?1588689478'
	},
	{
		id: 2,
		nation: 'Principality of Yuen',
		shortDesc: 'This is a short description for Nation B',
		longDesc: 'This is a long description for Nation B',
		image:
			'https://cdnb.artstation.com/p/assets/images/images/042/462/583/large/shuai-fu-2-08.jpg?1634583886'
	},
	{
		id: 3,
		nation: 'Avandira Sultanate',
		shortDesc: 'This is a short description for Nation C',
		longDesc: 'This is a long description for Nation C',
		image:
			'https://cdnb.artstation.com/p/assets/images/images/009/924/507/large/moa-h-44237932.jpg?1521608946'
	},
	{
		id: 4,
		nation: 'Lunaveira Empire',
		shortDesc: 'This is a short description for Nation D',
		longDesc: 'This is a long description for Nation D',
		image: '/images/lunaveira-city.avif'
	},
	{
		id: 5,
		nation: 'Hin Boldahr',
		shortDesc: 'This is a short description for Nation E',
		longDesc: 'This is a long description for Nation E',
		image: '/images/boldahr-city.avif'
	},
	{
		id: 6,
		nation: 'Triburones Archipelago',
		shortDesc: 'This is a short description for Nation F',
		longDesc: 'This is a long description for Nation F',
		image: '/images/triburones-city.avif'
	},
	{
		id: 7,
		nation: 'The Wyld Plains',
		shortDesc: 'This is a short description for Nation G',
		longDesc: 'This is a long description for Nation G',
		image:
			'https://cdna.artstation.com/p/assets/images/images/008/499/820/large/j-otto-szatmari-newyork-002env-empyre-jottoszatmari01.jpg?1570473607'
	}
];
