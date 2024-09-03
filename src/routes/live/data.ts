export interface Gig {
	date: Date;
	name: string;
	location: string;
	venue?: string;
}

export const gigs: Gig[] = [
	{
		name: 'Music Mayhem 2024 (Beardmen 10 år)',
		location: 'Skövde',
		date: new Date('2024-07-26'),
		venue: 'Husaren'
	},
	{
		name: 'SufferCity in Rock 2024',
		location: 'Lidköping',
		date: new Date('2024-06-15'),
		venue: 'Sockerfabriken'
	},
	{
		name: 'Ladugård Live w/ Deeper in Time, Larvingarna',
		location: 'Larv',
		date: new Date('2024-06-08')
	},
	{
		name: 'Spacedrifter + Water & Wine + Marcus Wilsson & Kollektivet',
		location: 'Hova',
		date: new Date('2024-05-25'),
		venue: 'MF Rockfickan'
	},
	{
		name: 'Nestor Next Efterfesten',
		location: 'Falköping',
		date: new Date('2024-04-13'),
		venue: 'Bowlingstället'
	},
	{
		name: 'Husaren Underground w/ Långfinger',
		location: 'Skövde',
		date: new Date('2024-04-12'),
		venue: 'Husaren'
	},
	{
		name: 'Grand Selmer + Spacedrifter',
		location: 'Göteborg',
		date: new Date('2023-11-24'),
		venue: 'Hängmattan'
	},
	{
		name: 'SufferCity in Rock 2023',
		location: 'Lidköping',
		date: new Date('2023-07-01'),
		venue: 'Sockerfabriken'
	},
	{
		name: 'Vernissage Morbid Verksamhet',
		location: 'Göteborg',
		date: new Date('2023-05-06'),
		venue: 'Fyrens Ölkafé'
	},
	{
		name: 'Spacedrifter + Midnight Circle + Oedet',
		location: 'Göteborg',
		date: new Date('2023-04-14'),
		venue: 'Kulturlagret'
	},
	{
		name: 'Live På Holmen  w/ Necktwist, Less Mind',
		location: 'Mariestad',
		date: new Date('2023-04-01'),
		venue: 'Karlsholme Folkets Park'
	},
	{
		name: 'Ladugårdsklubben w/ The Dahmers',
		location: 'Skara',
		date: new Date('2023-03-25'),
		venue: 'Vedens Lustgård'
	},
	{
		name: 'Viva Sounds 2022',
		location: 'Göteborg',
		date: new Date('2022-12-03'),
		venue: 'Hängmattan'
	},
	{
		name: 'Ladugård Live w/ Midnight Circle, V.A.S.P.',
		location: 'Larv',
		date: new Date('2022-08-13')
	},
	{
		name: 'SufferCity in Rock 2022',
		location: 'Lidköping',
		date: new Date('2022-07-02'),
		venue: 'Sockerfabriken'
	},
	{
		name: 'Spacedrifter + Gallow Hill',
		location: 'Falköping',
		date: new Date('2021-11-26'),
		venue: "O'Learys"
	},
	{
		name: 'Lidköping Live',
		location: 'Lidköping',
		date: new Date('2021-11-20'),
		venue: 'Sockerfabriken'
	},
	{
		name: 'Skördefestival',
		location: 'Skara',
		date: new Date('2021-08-21'),
		venue: 'Vedens Lustgård'
	},
	{
		name: 'Lidköping Live',
		location: 'Lidköping',
		date: new Date('2021-08-14'),
		venue: 'Sockerfabriken'
	},
	{
		name: 'Lilla Björkö w/ Arvid Nero',
		location: 'Lugnås',
		date: new Date('2021-08-07'),
		venue: 'Lilla Björkö'
	}
];