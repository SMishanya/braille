import { Component } from "@angular/core";
import { TranslationModel } from "./translation.model";
import { BrailleTranslationsService } from "./brailleTranslations.service";
import { TranslationsService } from '../shared/services/translations.service';
import { LanguagesService } from '../shared/services/languages.service';
import { RowColorDirective } from '../shared/directives/rowColor.directive';
import { KeyValuePair } from '../shared/models/KeyValuePair';

@Component({
	templateUrl: `./app/translations/translations-list.component.html`,
	styleUrls: [`./app/translations/translations-list.component.css`]
})
export class TranslationsListComponent {
	private supportedLanguages: KeyValuePair<number, string>[];
	private currentLanguage: string = 'en';

	constructor(
		private brailleTranslationsService: BrailleTranslationsService,
		private languagesService: LanguagesService,
		private translationsService: TranslationsService) {
	}

	translations: TranslationModel[];

	ngOnInit() {
		this.supportedLanguages = this.languagesService.supportedLanguages;
		this.brailleTranslationsService
			.getTranslations()
			.subscribe(data => {
				this.translations = data.json();
				console.log(data.json());
				console.log(this.translations);
			});
	}

	getBrailleTranslation(translation: TranslationModel, lang: string): string {
		let result: string = '';
		let previousElement: string = null;
		translation.letters.forEach(element => {
			result += this.translationsService.getBrailleTranslation(lang, element.join('').toString(), previousElement);
			previousElement = element.join('').toString();
		});
		return result;
	}

	setLanguageForTranslations(language: number[]) {
		let index = this.supportedLanguages.map(x => x.key).indexOf(language[0]);
		this.currentLanguage = this.supportedLanguages[index].value;
	}
}