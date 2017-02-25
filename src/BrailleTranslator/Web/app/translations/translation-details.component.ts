import { Component } from "@angular/core";
import { TranslationModel } from "./translation.model";
import { BrailleTranslationsService } from "./brailleTranslations.service";
import { TranslationsService } from '../shared/services/translations.service';
import { ActivatedRoute } from "@angular/router";

@Component({
	template: `
		<h3>{{translationsService.getTranslation('Translation')}} &#8470;{{translation?.id}}</h3>
		<div id="translationsCount">{{translationsService.getTranslation('TranslationsViewCount')}}: {{translation?.viewCount}}</div>
    `,
	styles: [`
		#translationsCount{
			color: #a8a8a8;
			margin-left: 1%;
			margin-top: -12px;
			font-size: 12px;
		}
	`]
})
export class TranslationDetailsComponent {

	constructor(
		private route: ActivatedRoute,
		private brailleTranslations: BrailleTranslationsService,
		private translationsService: TranslationsService) {

	}

	translation: TranslationModel;

	ngOnInit() {
		let id = parseInt(this.route.snapshot.params["id"], 10);
		this.brailleTranslations
			.getTranslation(id)
			.subscribe(data => { this.translation = data.json();});
	}

}