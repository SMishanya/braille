import { Injectable } from '@angular/core';

import { TranslationsService } from './translations.service';
import { KeyValuePair } from '../models/KeyValuePair';

@Injectable()
export class LanguagesService {
	public readonly interfaceLanguages: string[] = [
		'en', 'ru', 'uk'
	];

	public readonly supportedLanguages: KeyValuePair<number, string>[] = [
		new KeyValuePair<number, string>(1, 'en'),
		new KeyValuePair<number, string>(2, 'uk'),
		new KeyValuePair<number, string>(3, 'ru')
	];

	public languages: string[] = [
		'en'
	];

	constructor(private translationsService: TranslationsService) {
		if (this.supportedLanguages.map(sl => sl.value).indexOf(navigator.language) >= 0 && this.languages.indexOf(navigator.language) < 0) {
			this.languages.push(navigator.language);
		}
		translationsService.setLanguage(navigator.language);
	}
}
