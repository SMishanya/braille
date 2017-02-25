import {Component} from "@angular/core";
import { TranslationsService } from '../shared/services/translations.service';
import { LanguagesService } from '../shared/services/languages.service';

@Component({
    template: `
        <h2>{{translationsService.getTranslation('TranslationsTitle')}}</h2>
        <router-outlet></router-outlet>
    `
})
export class TranslationComponent {
	constructor(public translationsService: TranslationsService,
		private languagesService: LanguagesService) {
	}
}