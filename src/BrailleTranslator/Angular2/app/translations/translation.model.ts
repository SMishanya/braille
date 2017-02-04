export class TranslationModel {
	id: number;
	value: string;
	viewCount: number;

	constructor(id: number, value: string, viewCount: number) {
		this.id = id;
		this.value = value;
		this.viewCount = viewCount;
	}
}
