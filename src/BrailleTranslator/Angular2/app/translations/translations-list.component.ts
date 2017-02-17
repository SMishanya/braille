import { Component } from "@angular/core";
import { TranslationModel } from "./translation.model";
import { BrailleTranslationsService } from "./brailleTranslations.service";
import { TranslationsService } from '../shared/services/translations.service';

@Component({
	template: `
		<table>
			<thead>
				<tr>
					<td width="90%">{{translationsService.getTranslation('Translation')}}</td>
					<td width="10%">{{translationsService.getTranslation('TranslationsViewCount')}}</td>
				</tr>
			</thead>
			<tbody>
				<tr *ngFor="let translation of translations">
					<td width="90%"><a [routerLink]="translation.id">{{translation.value}}</a></td>
					<td width="10%">{{translation.viewCount}}</td>
				</tr>
			</tbody>
		</table>
    `,
	styles: [`
		table {
			width: 98%;
			position: relative;
			margin-left: 1%;
		}

		thead{
			background-color: black;
			color: white;
		}
		
		thead tr td{
			padding: 2px 2px 2px 5px;
		}
		
		tbody tr td{
			padding: 2px 2px 2px 5px;
		}
	`]
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
			});
	}
}