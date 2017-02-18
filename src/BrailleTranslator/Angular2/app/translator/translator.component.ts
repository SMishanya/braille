import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Http, Headers } from "@angular/http";
import Clipboard from 'clipboard';

import { TranslationsService } from '../shared/services/translations.service';
import { LanguagesService } from '../shared/services/languages.service';
import { PaneComponent } from './pane/pane.component';

@Component({
	selector: 'braille-translator',
	templateUrl: './app/translator/translator.component.html',
	styleUrls: ['./app/translator/translator.component.css']
})
export class TranslatorComponent implements OnInit {
	private urlToCopy: string = 'Default string';
	private languages: string[];
	private supportedLanguages: string[];

	private panes: PaneComponent[] = [
		new PaneComponent()
	];


	constructor(public translationsService: TranslationsService,
		private languagesService: LanguagesService,
		private activatedRoute: ActivatedRoute,
		private http: Http,
		private elmRef: ElementRef) {
	}

	ngOnInit() {
		this.supportedLanguages = this.languagesService.supportedLanguages;
		this.languages = this.languagesService.languages;
	}

	addPane() {
		this.panes.push(new PaneComponent());
	}

	copyShareLink() {
		const body = JSON.stringify(this.panes);
		const headers: Headers = new Headers();
		headers.append('Content-Type', 'application/json');
		this.http.post(`/api/saveTranslation`, body, { headers: headers }).subscribe(data => {
			this.urlToCopy = data.text();
			console.log(this.urlToCopy);
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
