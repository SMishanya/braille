import { Component } from "@angular/core";
import { TranslationModel } from "./translation.model";
import { TranslationsService } from "./translations.service";

@Component({
	template: `
        <h2>Translations list</h2>
        <ul>
            <li *ngFor="let translation of translations" ><a [routerLink]="translation.id">{{translation.value}}</a>, {{translation.viewCount}}</li>
        </ul>
    `
})
export class TranslationsListComponent {

	constructor(private translationsService: TranslationsService) {

	}

	translations: TranslationModel[];

	ngOnInit() {
		this.translationsService
			.getTranslations()
			.subscribe(data => {
				console.log(data.json());
				this.translations = data.json();
			});
	}
}