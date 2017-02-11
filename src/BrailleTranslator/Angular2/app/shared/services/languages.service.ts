import { Injectable } from '@angular/core';

import { TranslationsService } from './translations.service';

@Injectable()
export class LanguagesService {
	public readonly interfaceLanguages: string[] = [
		'en', 'ru', 'uk'
	];

	public readonly supportedLanguages: string[] = [
		'en', 'ru', 'uk'
	];

	public languages: string[] = [
		'en'
	];

	constructor(private translationsService: TranslationsService) {
		if (this.supportedLanguages.indexOf(navigator.language) >= 0 && this.languages.indexOf(navigator.language) < 0) {
			this.languages.push(navigator.language);
		}
		translationsService.setLanguage(navigator.language);
	}
}
