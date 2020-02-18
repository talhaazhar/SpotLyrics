import { Url } from 'url';
import { IBaseGenre } from '../common/Interfaces';

export class Genre implements IBaseGenre {
	public name: string;
	public icon: Url;
	private clickCount: number;

	constructor(name: string, iconURL: string) {
		this.name = name;
		this.icon = new URL(iconURL);
		this.clickCount = 0;
	}

	public getCount(): number {
		return this.clickCount;
	}

	protected addCount(): void {
		this.clickCount += 1;
	}
}
