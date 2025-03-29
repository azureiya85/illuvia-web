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
		shortDesc:
			'Considered as the center of Illuvia, Tharcia is the home of humans; the most versatile race. Jack of all trades, master of none. Tharcia is also varied in culture, for it is also home of many races and cultures depending on which side of the nation they are on. ',
		longDesc: 'This is a long description for Nation A',
		image:
			'https://cdnb.artstation.com/p/assets/images/images/026/402/275/large/max-bedulenko-greek-1.jpg?1588689478'
	},
	{
		id: 2,
		nation: 'Principality of Yuen',
		shortDesc:
			'Home of the SUn & Moon Elf. Both are in constant fight for the continent of Yuen. Both are resistant to change, especially the Moon Elf who is more attuned to nature, which led to an isolationist culture. Yuen is known for their artistry and spiritualism',
		longDesc: 'This is a long description for Nation B',
		image:
			'https://cdnb.artstation.com/p/assets/images/images/042/462/583/large/shuai-fu-2-08.jpg?1634583886'
	},
	{
		id: 3,
		nation: 'Avandira Sultanate',
		shortDesc:
			'Home of the dragon-kind such as dragonborn and kobold at the northern part, and the southern part is home of goblins and gnomes, separated by the Grand Symarea Canyon. Both sides has great desire for progress, but one fueled by guilt and the other fueled by pride.',
		longDesc: 'This is a long description for Nation C',
		image:
			'https://cdnb.artstation.com/p/assets/images/images/009/924/507/large/moa-h-44237932.jpg?1521608946'
	},
	{
		id: 4,
		nation: 'Lunaveira Empire',
		shortDesc:
			'Home of the Half-Elf and Dark Elf. The Half-Elf is technologically progressive yet socially conservative, while the Dark Elf resides at an area called Ennys Ennore, the border between the Empire and The Wyld Plains, adopting survival of the fittest principles.',
		longDesc: 'This is a long description for Nation D',
		image: '/images/lunaveira-city.avif'
	},
	{
		id: 5,
		nation: 'Hin Boldahr',
		shortDesc:
			'A great dwarven fortress spread across Mount Agharat,southern Kal`Hara. Dwarves are a race of hardworking andindustrious people who loves forging, drinking and a bar fight. Most dwarves are blacksmiths and rune carvers, makers of advanced armors and weapons',
		longDesc: 'This is a long description for Nation E',
		image: '/images/boldahr-city.avif'
	},
	{
		id: 6,
		nation: 'Triburones Archipelago',
		shortDesc:
			'Homeland of Undines, Cephalios and Catfolks, a pirate nation at the southern sea of Illuvia. They are free people who does not believe in governance. They live for adventures, freedom and riches and home of the most advanced seafaring technology',
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
