export interface AdvRules {
	id: number;
	title: string;
	shortDesc: string;
	longDesc: string;
	image: string;
}

export const advRules: AdvRules[] = [
	{
		id: 1,
		title: 'Pursuits',
		shortDesc:
			'Science is a living thing in Illuvia. Experimenting, changing and tweaking items is a core part of the setting that can lead to greater scientific and technological breakthrough. Become an everyman mechanic to a master inventor that publish a grand theory ',
		longDesc: 'This is a long description for Nation A',
		image: 'https://i.pinimg.com/1200x/0b/ec/3b/0bec3bb98129fa94f80a099faa799abb.jpg'
	},
	{
		id: 2,
		title: 'Hexcrawl',
		shortDesc:
			'Major theme in Illuvia is exploring the unknown, either scientific pursuit, facing eldritch horror that lurks beneath the surface of Illuvia or simply travelling through uncharted lands. Using hexcrawl can communicate the feeling of a perilious and exciting adventures',
		longDesc: 'This is a long description for Nation B',
		image: 'https://i.pinimg.com/1200x/ae/48/76/ae4876ccebfb6bda9c28596fcc6630cd.jpg'
	},
	{
		id: 3,
		title: 'Naval Combat',
		shortDesc:
			'The ocean is a big part of Illuvia, it is an untamed wilderness on its own. The constant battles between the pirates and the navy, the prospect of hidden treasures and the hunt for rare sea creatures.',
		longDesc: 'This is a long description for Nation C',
		image: 'https://i.pinimg.com/originals/bc/1c/87/bc1c87f217aaf51e2912e66f88b47d61.jpg'
	},
	{
		id: 4,
		title: 'Crowded City',
		shortDesc:
			'When bullets fly in bustling streets, innocent bystanders face greater danger. Ranged combat in crowded areas increases the risk of collateral damage, making every shot a potential disaster.',
		longDesc:
			"In the crowded streets of Illuvia's cities, ranged combat becomes an even more dangerous proposition. Normally, a ranged attack will only hit a bystander on a critical failure or a roll of 1 (2 if automatic). In a crowded city, increase the chance of a bystander getting hit by 1. This heightens the tension of urban gunfights while emphasizing the consequences of violence in populated areas. Gunfighters must weigh the excitement of the duel against the danger to innocents nearby.",
		image:
			'https://cdna.artstation.com/p/assets/images/images/034/262/712/large/gilles-ketting-medievalmarket-gillesketting.jpg?1611840879'
	},
	{
		id: 5,
		title: 'Black Powder Weapons',
		shortDesc:
			'These powerful but unpredictable firearms deliver devastating damage but come with risks of malfunction and unintended effects, making them as dangerous to wield as they are to face.',
		longDesc:
			'Black powder weapons offer unmatched power in Illuvia but come with significant drawbacks. They follow two special subrules:\n\n- Malfunction: On a critical failure, the gun malfunctions. The nature of the malfunction depends on the card drawn, ranging from minor jams to catastrophic barrel explosions.\n\n- Grazing: When a player misses a ranged attack with a black powder weapon, they still have a chance to graze the target based on the card they draw. This might cause reduced damage or apply conditions like Distracted or Vulnerable.\n\nThese rules emphasize that while black powder weapons are immensely powerful, their volatile nature makes them unpredictable on the battlefield.',
		image:
			'https://cdna.artstation.com/p/assets/images/images/007/389/036/large/clement-buisson-production-design-week14-clement-buisson-14.jpg?1505813132'
	},
	{
		id: 6,
		title: 'Duels',
		shortDesc:
			'Formal gunfights follow strict traditions involves psychological warfare; wit, intimidation and deception are legal before the final deadly exchange, where preparation and nerve determine the victor.',
		longDesc:
			'Duels in Illuvia are formal affairs lasting exactly three rounds. Before the first round, each duelist receives a face-down "Hole Card" hidden from their rival. Certain Edges may grant additional Hole Cards, making experienced gunslingers particularly dangerous.\n\nDuring the first and second rounds, participants draw Action Cards and may perform most actions except actual attacks. Tests during these rounds build tension - a raise doesn\'t Shake opponents but allows drawing new Hole Cards or forcing foes to discard theirs. A Critical Failure gives the opponent an additional Hole Card.\n\nIn the dramatic third round, duelists reveal their chosen Hole Card instead of drawing new Action Cards. This determines initiative. If the attacker possesses additional Hole Cards higher than the opponent\'s, they add a d6 bonus to damage. Most crucially, no duelist may Soak Wounds from other duelists - you must accept the consequences of your challenge.',
		image: 'https://i.pinimg.com/1200x/60/47/76/6047765c0a429e4a3ed274852f2c8801.jpg'
	}
];
