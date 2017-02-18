import { Component } from "@angular/core";
import { TranslationModel } from "./translation.model";
import { BrailleTranslationsService } from "./brailleTranslations.service";
import { TranslationsService } from '../shared/services/translations.service';
import { RowColorDirective } from '../shared/directives/rowColor.directive';

@Component({
	template: `
		<table>
			<thead>
				<tr>
					<td width="5%">&#8470;</td>
					<td width="85%">{{translationsService.getTranslation('Translation')}}</td>
					<td width="10%">{{translationsService.getTranslation('TranslationsViewCount')}}</td>
				</tr>
			</thead>
			<tbody>
				<tr *ngFor="let translation of translations; let rowNumber = index" rowColor [rowId]="rowNumber">
					<td width="5%">{{translation.id}}.</td>
					<td width="85%"><a [routerLink]="translation.id">{{getBrailleTranslation(translation, 'en')}}</a></td>
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
			border: 1px solid black;
		}
		
		thead tr td{
			padding: 2px 2px 2px 5px;
		}
		
		tbody tr td{
			padding: 2px 2px 2px 5px;
			border: 1px solid black;		
			box-sizing: border-box;
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