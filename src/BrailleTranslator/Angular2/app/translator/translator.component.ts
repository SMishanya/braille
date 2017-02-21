import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Http, Headers } from "@angular/http";

import { TranslationsService } from '../shared/services/translations.service';
import { LanguagesService } from '../shared/services/languages.service';
import { PopupComponent } from '../shared/components/popup.component';
import { DropdownComponent } from '../shared/components/dropdown.component';
import { PaneComponent } from './pane/pane.component';
import { KeyValuePair } from '../shared/models/KeyValuePair';

@Component({
	selector: 'braille-translator',
	templateUrl: './app/translator/translator.component.html',
	styleUrls: ['./app/translator/translator.component.css']
})
export class TranslatorComponent implements OnInit {
	private link: string;
	private selectedLanguageNames: string[];
	private selectedLanguageIds: number[];
	private supportedLanguages: KeyValuePair<number, string>[];

	@Input() private popupToggle: boolean = false;

	private panes: PaneComponent[] = [
		new PaneComponent()
	];


	constructor(public translationsService: TranslationsService,
		private languagesService: LanguagesService,
		private activatedRoute: ActivatedRoute,
		private http: Http,
		private elmRef: ElementRef) {
	}

	initTraslationLanguages(input: number[]) {
		this.selectedLanguageNames = [];
		this.selectedLanguageIds = [];
		input.forEach(i => {
			this.selectedLanguageNames.push(this.supportedLanguages[i - 1].value);
			this.selectedLanguageIds.push(i);

		});
	}

	ngOnInit() {
		this.supportedLanguages = this.languagesService.supportedLanguages;
		//this.languages = this.languagesService.languages;
	}

	addPane() {
		this.panes.push(new PaneComponent());
	}

	share() {
		this.link = this.translationsService.getTranslation('PleaseWaitForAWhile') + '...';
		const body = {
			Letters: this.panes.map(x => x.letter),
			LanguageIds: this.selectedLanguageIds
		}
		const headers: Headers = new Headers();
		headers.append('Content-Type', 'application/json');
		this.http.post(`/api/saveTranslation`, body, { headers: headers }).subscribe(data => {
			this.link = 'http://localhost:51822/#/translations/' + data.text();
		});
	}

	clearPanel() {
		this.panes = [new PaneComponent()];
	}

	onPaneClicked(paneId: number) {
		if (paneId == this.panes.length - 1) {
			this.addPane();
		}
	}

	onLanguageChanged(selectedLang: any) {
		if (selectedLang === 'en') {
			this.languagesService.languages.splice(1, 1);
		}
		else if (this.languagesService.languages.length > 1) {
			this.languagesService.languages[1] = selectedLang;
		}
		else {
			this.languagesService.languages.push(selectedLang);
		}
	}

	getBrailleTranslation(lang: string): string {
		let result: string = '';
		let previousElement: string = null;
		this.panes.forEach(element => {
			result += this.translationsService.getBrailleTranslation(lang, element.letter.join('').toString(), previousElement);
			previousElement = element.letter.join('').toString();
		});
		return result;
	}
}
