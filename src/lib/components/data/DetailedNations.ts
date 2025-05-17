// import IconShield from '@lucide/svelte/icons/shield'; // Example
// type LucideIcon = typeof IconShield;

export interface NationSubRegion {
	name: string; // e.g., "Central Tharcia"
	description: string; // Short description
	// inhabitants?: string; // e.g., "Humans, Canids"
	// inspiration?: string; // e.g., "Roman Republic to Holy Roman Empire"
}

export interface Nation {
	id: string; // e.g., 'tharcia'
	nation: string; // Full name, e.g., "Republic of Tharcia"
	officialName?: string; // e.g., "Sacrum Republicae Tharcei"
	established?: string; // e.g., "558 AE"
	shortDesc: string; // For the landing page carousel card
	image: string; // Main image for carousel and detailed view
	postcardImage?: string; // Specific image for the "postcard" selector (could be same as image)
	flagImage?: string; // Optional: URL to a flag image

	// Detailed information for the location page
	overview: string[]; // Array of paragraphs for the main overview
	governance?: string[];
	society?: string[];
	technology?: string[];
	military?: string[];
	economy?: string[];
	culture?: string[]; // Could combine with society or keep separate
	subRegions?: NationSubRegion[]; // For nations like Tharcia or Yuen with distinct areas
	realWorldInspirations: string; // Footer note
}

// Example (ensure all image paths are correct and exist in your /static folder)
export const nationsData: Nation[] = [
	{
		id: 'tharcia',
		nation: 'Republic of Tharcia',
		officialName: 'Sacrum Republicae Tharcei',
		established: '558 AE',
		shortDesc: 'A vast, diverse human republic, considered the "center of the world," navigating faith and progress.',
		image: 'https://cdnb.artstation.com/p/assets/images/images/026/402/275/4k/max-bedulenko-greek-1.jpg?1588689478',
		postcardImage: 'https://cdnb.artstation.com/p/assets/images/images/026/402/275/4k/max-bedulenko-greek-1.jpg?1588689478',
		flagImage: 'https://cdnb.artstation.com/p/assets/images/images/026/402/275/4k/max-bedulenko-greek-1.jpg?1588689478',
		overview: [
			'The heartland of humanity in Illuvia, Tharcia is a vast and diverse republic, often seen as the "center of the world." Its culture is a tapestry woven from interactions with neighboring nations, from the feudal Yuen in the west to the industrious Hin Boldahr and exotic Avandira in the east.',
            'Its capital, Ad Iuvense, stands as a beacon of faith and law, while the bustling Port Oxharbor in the East is a marvel of technological advancement. The nation\'s strength is further reflected in its formidable military, particularly the renowned Tharcia Royal Navy.'
		],
		subRegions: [
			{ name: 'Central Tharcia', description: 'Hub of governance and Romanesque tradition. Home to humans and canids.' },
			{ name: 'East Tharcia', description: 'Bustling trade ports, merchant and tiefling hub. Inspired by Napoleonic France.' },
			{ name: 'South Tharcia', description: 'Pirate havens and outlaw territories, echoing South American spirit.' },
			{ name: 'West Tharcia', description: 'Nature-aligned, close to Yuen. Halflings and Wood Elves common. Inspired by Southeast Asian influences.' },
			{ name: 'North Tharcia', description: 'Land of Half-Elves, a canal-laced region below sea level, reminiscent of 19th-century Netherlands.' }
		],
		governance: [
			'Led by a democratically elected Consul and a Senate, Tharcia has officially abolished monarchy and caste systems, though wealth disparities persist. Consul Gaius Olcinius Pertinax currently presides over a prosperous, if complex, republic.',
            'The nation is divided into five autonomous states (Central, East, South, West, North), each with a Governor promoting cultural diversity under the Consul\'s guidance.'
		],
		technology: [
            'Technological adoption varies wildly across its territories. The Holy City of Ad Iuvense balances faith (worshipping the Sixteen Gods through the [[Order of the Sacred Sixteen]]) with reluctant technological progress. Port Oxharbor in the East showcases peak advancement due to Hin Boldahr and Avandiran influence, while the South boasts sophisticated seafaring technology.'
        ],
        military: [
            'Tharcia possesses the largest military force in Illuvia. Its strength is most notably projected through the Tharcia Royal Navy, a formidable fleet that commands respect across the seas.'
        ],
		realWorldInspirations: 'Inspired by various phases of Roman history (Republic to Holy Roman Empire), Byzantine Empire, Napoleonic France, 19th Century Netherlands, and South American & Southeast Asian influences.'
	},
	{
		id: 'yuen',
		nation: 'Principality of Yuen',
		officialName: ' Kyokujitsu no Teikoku (Imperium of the Rising Sun) | Mǎn Yuè Wáng Guó (Kingdom of Fullbright Moon) | Haesongju (State of Haesong)',
		established: '25 AE',
		shortDesc: 'A continent of feuding Sun and Moon Elves, rich in tradition, art, and emerging conflict.',
		image: 'https://i.pinimg.com/1200x/63/be/7b/63be7b90edf40a3817dc129cee7b6b20.jpg',
		postcardImage: 'https://i.pinimg.com/1200x/63/be/7b/63be7b90edf40a3817dc129cee7b6b20.jpg',
		flagImage: 'https://i.pinimg.com/1200x/63/be/7b/63be7b90edf40a3817dc129cee7b6b20.jpg', // Or a combined flag / moon flag
		overview: [
			'The ancestral home of the Sun Elves (Kyokujitsu no Teikoku - Imperium of the Rising Sun, est. 25 AE) and Moon Elves (Mǎn Yuè Wáng Guó - Kingdom of Fullbright Moon, est. 25 AE), Yuen is a continent steeped in tradition, art, and spiritualism.',
            'These two elven subraces are in a perpetual, often cold, war for dominance over the Yuen continent, with the neutral elves of Haesong Mountain (Haesongju, est. 25 AE) attempting to mediate their ancient disputes.'
		],
        culture: [ // Using culture instead of society here as it fits better
            'Sun Elves are more attuned to magic and maintain a feudal empire under Emperor Hikokatsu Itagaki. Their society values stability, sometimes leading to stagnation and commoner unrest.',
            'Moon Elves are more attuned to nature, traditionally reclusive, and dwell in the deep Yangju Forest. Organized into 12 Zodiac Clans, they are led by a Great Chief. Under the current Great Chief Yang Huiliang, the Moon Elves are cautiously modernizing, opening trade and even adopting firearms and naval tactics to counter Sun Elf expansion.'
        ],
		technology: [
            'Both factions are generally resistant to rapid technological change, viewing it with suspicion. However, the Moon Elves are now strategically embracing certain advancements out of necessity for survival and to bolster their position against the Sun Elves.'
        ],
        economy: [ // Specifically for Moon Elves as highlighted
            'The Moon Elves, driven by pragmatic leadership, are prospering through newly established trade routes with Southern Tharcia and the Triburones Archipelago, primarily exporting natural resources from the rich Yangju Forest.'
        ],
		realWorldInspirations: 'Heavily inspired by early to mid-19th century East Asia, including Japan’s Meiji Restoration, China’s late Qing Dynasty, and Korea’s late Joseon Dynasty, primarily for aesthetics and societal structures.'
	},
	{
		id: 'avandira',
		nation: 'Avandira', // Combined name for simplicity on postcard
		officialName: 'Independent State of Avandira (South) | Avandriye Saltanat (North)',
		established: '697 AE (South) | 864 AE (North)',
		shortDesc: 'A desert realm of technological marvels, from scholarly pursuits to Wild West inventions.',
		image: 'https://cdnb.artstation.com/p/assets/images/images/027/065/045/large/daoyi-chen-20-5-26.jpg?1590499342', // REPLACE
		postcardImage: 'https://cdnb.artstation.com/p/assets/images/images/027/065/045/large/daoyi-chen-20-5-26.jpg?1590499342', // REPLACE
		flagImage: 'https://cdnb.artstation.com/p/assets/images/images/027/065/045/large/daoyi-chen-20-5-26.jpg?1590499342', // REPLACE (Maybe Sultanate flag?)
		overview: [
			'A sun-scorched desert realm, Avandira is a beacon of technological advancement, driven by diverse motivations. The North is home to dragonborn, kobolds, and harelings, while the South, across the Grand Symarea Canyon, hosts crafty goblins, gnomes, misea, and dunewalkers.',
            'Both regions share a fervent desire for progress, albeit with different methods and ethics, earning Avandira the moniker "Desert of Progress."'
		],
		subRegions: [
			{ name: 'North Avandira (Avandriye Saltanat, est. 864 AE)', description: 'A technologically advanced sultanate of scholars and inventors (dragonborn, kobolds, harelings), driven to atone for their celestial dragon ancestors\' past actions.' },
			{ name: 'South Avandira (Independent State of Avandira / "Powder Desert", est. 697 AE)', description: 'Home to kobolds, gnomes, goblins, misea, and dunewalkers. Known for its Wild West atmosphere, outlaws, gunslingers, and ethically questionable inventions.' }
		],
		governance: [
            '<strong> North (Sultanate): </strong> Transitioning towards democracy, currently led by Grand Vizier Uriash Balghull. It maintains a nobility system of "Houses," with citizens voting for a ruling House every ten years. Focuses on peaceful innovation.',
            '<strong> South (Powder Desert): </strong> A collection of scattered towns and villages, each led by a Mayor, with law upheld by Sheriffs. It\'s a land of constant "friendly stand-offs" and explosive experimentation.'
		],
		technology: [
            '<strong> North: </strong> The most technologically advanced region in Illuvia, focusing on broad innovation and research. Their greatest achievement includes the "Steel Barracuda" amphibious steam locomotive connecting Northern Avandira to the Deephold prison island.',
            '<strong> South: </strong> Specializes in gunpowder, firearms, explosives, and ethically dubious inventions, often traded on the black market or with pirates. Travel is by horse or limited steam locomotives, hindered by dangerous Marakash Sandworms (Tremera).'
        ],
		realWorldInspirations: 'North Avandira inspired by the Middle East, North Africa, & 19th-century Ottoman Empire. South Avandira inspired by the American Wild West.'
	},

	// NEW NATION: LUNAVEIRA
	{
		id: 'lunaveira',
		nation: 'Lunaveira Empire',
		officialName: 'Tsarskaya Imperiya Lunaverya',
		established: '334 AE',
		shortDesc: 'An expansionist Half-Elven empire focused on arcane might, bordering the reforming Drow of Ennys Ennore.',
		image: '/images/lunaveira-city.avif', // REPLACE
		postcardImage: '/images/lunaveira-city.avif', // REPLACE
		flagImage: '/images/lunaveira-city.avif', // REPLACE
		overview: [
			'The Tsarist Empire of Lunaveira is the homeland of the ambitious Half-Elves, driven to restore the lost glory of their High Elf ancestors. It\'s a nation of prestigious mage academies and research institutes, often with an offensive focus, making it a politically unstable and expansionist power.',
            'Bordering Lunaveira are the shadowed caverns of Ennys Ennore (Varash d’Ennys Ennore, est. Unknown), domain of the Drow, who are currently undergoing significant cultural reform.'
		],
        society: [ // Using society to cover both Half-Elves and Drow context here
            '<strong> Lunaveiran Half-Elves: </strong> Led by Tsar Kryanova II, they are technologically adaptive but socially conservative, maintaining a strict caste system (Royal Blood, Great Nobility, Lesser Nobility, Honorary Citizen, Peasant, Lowborn) which fuels internal conflict. They are racing against time to recover lost elven knowledge.',
            '<strong> Drow of Ennys Ennore: </strong> Historically aggressive, the Drow are now influenced by the Fae of the Wyld Plains and a desire to counter Lunaveiran expansion. Led by High Mother Drisjra Zauiryn, they are shifting towards a more harmonious society, though not without internal resistance. They dwell in mountain caverns, with many Drow seeking fortune externally, often allying with pirates.'
        ],
		technology: [
            'Lunaveira is highly advanced, second only to North Avandira, but with a strong emphasis on military and offensive applications of magic and technology. All nations watch their expansionist tendencies warily.',
            'The Drow are less technologically inclined, relying on natural means and scavenged/traded goods.'
        ],
		realWorldInspirations: 'Lunaveira inspired by the early 19th-century Russian Empire. Drow culture and aesthetics of Ennys Ennore inspired by Ancient Egypt mixed with conventional Drow lore.'
	},
{
		id: 'hin-boldahr',
		nation: 'Hin Boldahr',
		officialName: 'Kingdom of Boldahrum (Goldfall Era)',
		established: '346 AE',
		shortDesc: 'A mighty dwarven fortress-kingdom, masters of craft, tradition, and a good brawl.',
		image: '/images/boldahr-city.avif', // REPLACE
		postcardImage: '/images/boldahr-city.avif', // REPLACE
		flagImage: '/images/boldahr-city.avif', // REPLACE
		overview: [
			'The mighty dwarven fortress of Hin Boldahr, carved into Mount Agharat, is a bastion of tradition, craftsmanship, and hearty camaraderie. Almost exclusively populated by dwarves, they are hardworking, honor-bound warriors and artisans who worship Myurkke, the God of Forge & Creation.',
            'Their culture venerates the "old ways" while ingeniously adapting new technologies, always striving to create works that far surpass current standards while respecting their heritage.'
		],
		governance: [
            'Led by King Tursaem Goldfall, chosen publicly by the previous King and court advisors, Hin Boldahr is a remarkably stable kingdom. Dwarves are content as long as they can forge, trade their masterfully crafted goods for gold, and enjoy a good tavern brawl.',
            'While primarily focused on their own prosperity and defense, they are wary of Lunaveira\'s expansionism and have bolstered their military forces in preparation for any potential conflict.'
		],
		technology: [
            'Dwarves possess a unique technological approach: they meticulously dissect new inventions to understand their inner workings, then recreate superior versions infused with their traditional craftsmanship and cultural identity.',
            'They are undisputed master blacksmiths, rune crafters, and carvers, whose creations are highly valued across Illuvia.'
        ],
        economy: [
            'Their primary goal is the creation and trade of exceptional goods. They collaborate extensively with the Avandira Sultanate, particularly in projects like the "Steel Barracuda" amphibious train and the Deephold prison (often staffed by dwarven wardens and machinists).',
            'They maintain healthy trade with the Triburones Archipelago, valuing appreciation for their craft over political alignments, though they exercise caution in dealings with Lunaveira.'
        ],
        culture: [
            'Hin Boldahr is home to "The Fist of Valhalla," a renowned fighting tournament held in a spectacular steam-powered arena. This event serves not only as entertainment and a source of profit but also as a proving ground for new combat equipment and weaponry, drawing fighters from across Illuvia.'
        ],
        society: [ // Merging inhabitants here
            'Culturally and racially the least diverse nation, almost all citizens are dwarves. The frost-covered outer forests surrounding the fortress are known to be home to Frost Canides.'
        ],
		realWorldInspirations: 'Inspired by Nordic nations and culture, particularly their mythology, craftsmanship, and warrior traditions.'
	},

	// NEW NATION: TRIBURONES ARCHIPELAGO
	{
		id: 'triburones',
		nation: 'Triburones Archipelago',
		officialName: 'Pessoas Livres de Triburonesa (The Free People of Triburones)',
		established: '521 AE',
		shortDesc: 'A sun-drenched chain of islands, home to pirates, outlaws, and masters of seafaring technology.',
		image: '/images/triburones-city.avif', // REPLACE
		postcardImage: '/images/triburones-city.avif', // REPLACE
		flagImage: '/images/triburones-city.avif', // REPLACE (A generic pirate flag or a specific one)
		overview: [
			'A sun-drenched haven for pirates, outlaws, and thrill-seekers, the Triburones Archipelago is the domain of Sea Elves, Tritons, Cephalios, Tabaxi, and Sirens. Originally uninhabited, these islands became a new home for Undines and Catfolks fleeing Lunaveiran expansion in The Wyld Plains.',
            'Finding a taste for the free life of piracy, they transformed the archipelago into a land of loot, booze, and sea shanties, renowned for housing the best seafaring technology and seafarers in Illuvia.'
		],
		governance: [
            'Officially leaderless, the Archipelago recognizes a "Pirate King" for formality – currently the Undine tactician Sihnion Chaenath of the Blue Tails Pirates. His daring heist on Tharcia\'s central bank earned him the highest bounty.',
            'Sihnion\'s more strategic, less carefree leadership, a response to rising global tensions, has caused some minor unrest among the typically laid-back populace, though his military acumen is respected.'
		],
		technology: [
            'The Archipelago boasts the most advanced seafaring technology and weaponry in Illuvia. They share an interest with Southern Avandira in creating technology with "questionable ethical implications" and are open to anyone sharing their enthusiasm for adventure and treasure hunting.'
        ],
        economy: [
            'Main trades include firearms, gunpowder, naval technology and equipment, explosives, exotic herbs and reagents, rare animals, and various black market drugs and inventions. They are often at odds with Tharcia\'s Navy, a conflict many pirates view as "friendly banter."'
        ],
        // Using subRegions to list key pirate factions and their territories
        subRegions: [
            { name: 'Cephalios (West Malarife)', description: 'Led by Axel Zaragoza and his Bloodsail Buccaneers aboard "The Tide".' },
            { name: 'Undines (Port Artestiada, East Malarife)', description: 'Led by Pirate King Sihnion Chaenath and the Blue Tails Pirates aboard "Clockwork Blues"; Port Artestiada is the unofficial capital.' },
            { name: 'Catfolk (Outer Islands)', description: 'Led by Serafina Morais and her Silent Sea Pirates aboard "Siren\'s Song".' }
        ],
		realWorldInspirations: 'Inspired by countries in the Iberian Peninsula (Spain, Portugal, Andorra), the Caribbean, and the Golden Age of Piracy, focusing on thrill-seeking, naval prowess, and a free-spirited outlaw culture.'
	},

	// NEW NATION: THE WYLD PLAINS
	{
		id: 'wyld-plains',
		nation: 'The Wyld Plains',
		// No single official name or establishment date due to its nature
		shortDesc: 'A mystical wilderness, home to Fae and diverse sentient creatures, striving to preserve nature against encroachment.',
		image: 'https://cdnb.artstation.com/p/assets/images/images/004/662/387/large/tyler-edlin-final.jpg?1485371254', // REPLACE
		postcardImage: 'https://cdnb.artstation.com/p/assets/images/images/004/662/387/large/tyler-edlin-final.jpg?1485371254', // REPLACE
		flagImage: 'https://cdnb.artstation.com/p/assets/images/images/004/662/387/large/tyler-edlin-final.jpg?1485371254', // REPLACE (Perhaps a nature symbol)
		overview: [
			'A mystical, sprawling wilderness, The Wyld Plains are the ancestral lands of the Fae and various monstrous but sentient creatures like fairies, satyrs, centaurs, minotaurs, giants, tortles, eladrin, and goliaths.',
            'They live in service to the spirit of Mother Terra, dedicated to preserving nature and harmony. Traditionally peaceful and keeping to their own diverse cultures, they are now undergoing a significant cultural shift due to pressure from Lunaveiran expansion and the encroachment of modern technology.'
		],
		governance: [
            'Historically, each race operated under its own leadership (e.g., Mother Fairy Arwena, Minotaur Chief Guntarak). The threat from Lunaveira has forced them to form "The Wyld Council," a coalition of leaders who meet in a great tree house to coordinate their collective survival.',
            'They are increasingly influenced by the Drow of Ennys Ennore, learning about societal structure and organized defense, while in turn teaching the Drow to embrace a more liberated and nature-connected spirit.'
		],
		society: [ // Combining culture and society here
            'The denizens of the Wyld Plains are deeply connected to nature and mysticism. While each race maintains its unique customs, they share a common goal of protecting their ancestral lands.',
            'Their forced adaptation involves a difficult balance between preserving their ancient ways and adopting new strategies for survival against more technologically advanced and organized adversaries.'
        ],
        technology: [
            'Possessing little traditional technology, their primary exposure comes from the Drow and those Fae who have ventured to places like Triburones Archipelago. They instinctively dislike "shiny metal machinery" but are slowly being forced to adapt or face extinction.',
            'The outer Wyld Plains show some signs of nature-integrated "modern" architecture—a collaborative effort with the Drow—but the deeper regions remain sacred, wild, and largely untouched by external technologies.'
        ],
        economy: [
            'Their main trade involves the various exotic flora and fauna that thrive within their mystical forests. Initially hesitant to commodify their natural bounty, they have become more open to trade over time, though with careful restrictions to maintain ecological balance and respect for their ancient lands.'
        ],
		realWorldInspirations: 'A typical Faewild with unique steampunk/clockpunk twists; not directly based on a specific historical period but draws from folklore and fantasy tropes of enchanted forests and their guardians.'
	}
];