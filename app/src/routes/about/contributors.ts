type ContributorRole = 'contributor' | 'developer' | 'maintainer' | 'owner';

type ContributorInput = //
	Pick<Contributor, 'name' | 'github'> & //Required
		Partial<Omit<Contributor, 'name' | 'github'>>; //Optional
export type SocialLink = {
	type: string;
	url: string;
	text?: string;
	icon?: string;
};

export class Contributor {
	name: string;
	github: string;
	role: ContributorRole;
	description?: string;
	imageUrl?: string;
	links: SocialLink[];
	constructor(i: ContributorInput) {
		this.name = i.name;
		this.github = i.github;
		this.role = 'developer';
		this.links = [];
		Object.assign(this, i);
		this.imageUrl = i.imageUrl || `${i.github}.png`;
		this.links.push({ type: 'github', url: i.github, icon: 'mdi:github' });
	}
}

export const contributors: Contributor[] = [
	new Contributor({
		name: 'Loes van den Biggelaar',
		github: 'https://github.com/Loesvandenbiggelaar'
	}),
	new Contributor({
		name: 'Thomas Bollen',
		github: 'https://github.com/tbollen',
		links: [
			{ type: 'linkedin', url: 'https://www.linkedin.com/in/thomas-bollen/', icon: 'mdi:linkedin' }
		]
	})
];
