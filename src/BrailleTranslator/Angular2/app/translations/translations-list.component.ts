import { Component } from "@angular/core";
import { TranslationModel } from "./translation.model";
import { BrailleTranslationsService } from "./brailleTranslations.service";
import { TranslationsService } from '../shared/services/translations.service';
import { RowColorDirective } from '../shared/directives/rowColor.directive';

@Component({
	templateUrl: `./app/translations/translations-list.component.html`,
	styleUrls: [`./app/translations/translations-list.component.css`]
})
export class TranslationsListComponent {

	constructor(private brailleTranslationsService: BrailleTranslationsService, private translationsService: TranslationsService) {
	}

	translations: TranslationModel[];

	ngOnInit() {
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
}