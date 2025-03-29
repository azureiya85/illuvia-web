export interface NewRaces {
	id: number;
	title: string;
	desc: string;
	traits: string;
	image: string;
}

export const newRaces: NewRaces[] = [
	{
		id: 1,
		title: 'Pursuits',
		desc: 'Science is a living thing in Illuvia. Experimenting, changing and tweaking items is a core part of the setting that can lead to greater scientific and technological breakthrough. Become an everyman mechanic to a master inventor that publish a grand theory ',
		traits: 'This is a long description for Nation A',
		image: 'https://i.pinimg.com/1200x/0b/ec/3b/0bec3bb98129fa94f80a099faa799abb.jpg'
	},
	{
		id: 2,
		title: 'Hexcrawl',
		desc: 'Major theme in Illuvia is exploring the unknown, either scientific pursuit, facing eldritch horror that lurks beneath the surface of Illuvia or simply travelling through uncharted lands. Hexcrawl communicate the feeling of a perilious and exciting adventures',
		traits: 'This is a long description for Nation B',
		image: 'https://i.pinimg.com/1200x/ae/48/76/ae4876ccebfb6bda9c28596fcc6630cd.jpg'
	},
	{
		id: 3,
		title: 'Naval Combat',
		desc: 'The ocean is a big part of Illuvia, it is an untamed wilderness on its own. The constant battles between the pirates and the navy, the prospect of hidden treasures and the hunt for rare sea creatures.',
		traits: 'This is a long description for Nation C',
		image: 'https://i.pinimg.com/originals/bc/1c/87/bc1c87f217aaf51e2912e66f88b47d61.jpg'
	},
	{
		id: 4,
		title: 'Crowded City',
		desc: 'When bullets fly in bustling streets, innocent bystanders face greater danger. Ranged combat in crowded areas increases the risk of collateral damage, making every shot a potential disaster.',
		traits:
			"In the crowded streets of Illuvia's cities, ranged combat becomes an even more dangerous proposition. Normally, a ranged attack will only hit a bystander on a critical failure or a roll of 1 (2 if automatic). In a crowded city, increase the chance of a bystander getting hit by 1. This heightens the tension of urban gunfights while emphasizing the consequences of violence in populated areas. Gunfighters must weigh the excitement of the duel against the danger to innocents nearby.",
		image:
			'https://cdna.artstation.com/p/assets/images/images/034/262/712/large/gilles-ketting-medievalmarket-gillesketting.jpg?1611840879'
	},
	{
		id: 5,
		title: 'Black Powder Weapons',
		desc: 'These powerful but unpredictable firearms deliver devastating damage but come with risks of malfunction and unintended effects, making them as dangerous to wield as they are to face.',
		traits:
			"In the crowded streets of Illuvia's cities, ranged combat becomes an even more dangerous proposition. Normally, a ranged attack will only hit a bystander on a critical failure or a roll of 1 (2 if automatic). In a crowded city, increase the chance of a bystander getting hit by 1. This heightens the tension of urban gunfights while emphasizing the consequences of violence in populated areas. Gunfighters must weigh the excitement of the duel against the danger to innocents nearby.",
		image:
			'https://cdna.artstation.com/p/assets/images/images/034/262/712/large/gilles-ketting-medievalmarket-gillesketting.jpg?1611840879'
	}
];
