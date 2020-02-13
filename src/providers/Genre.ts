import { Url } from 'url';

export class Genre {
	public name: string;
	public icon: Url;
	private clickCount: number;

	constructor(name: string, iconURL: string) {
		this.name = name;
		console.log(iconURL);
		this.icon = new URL(iconURL);
		this.clickCount = 0;
	}

	public getCount(): number {
		return this.clickCount;
	}

	public addCount(): void {
		this.clickCount += 1;
	}
}
