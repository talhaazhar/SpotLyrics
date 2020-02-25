import { Url } from 'url';
import { IBaseGenre } from '../common/Interfaces';

export class Genre implements IBaseGenre {
	public name: string;
    public icon: Url;
    public genreId: number;
	private clickCount: number;

	constructor(name: string, iconURL: string, genreId: number) {
		this.name = name;
		this.icon = new URL(iconURL);
        this.clickCount = 0;
        this.genreId = genreId;
	}

	public getCount(): number {
		return this.clickCount;
	}

	protected addCount(): void {
		this.clickCount += 1;
	}
}
