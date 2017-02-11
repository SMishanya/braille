import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { TranslationsService } from '../shared/services/translations.service';
import { LanguagesService } from '../shared/services/languages.service';
import { PaneComponent } from './pane/pane.component';

@Component({
	selector: 'braille-translator',
	templateUrl: './app/translator/translator.component.html',
	styleUrls: ['./app/translator/translator.component.css']
})
export class TranslatorComponent implements OnInit {
	private languages: string[];
	private supportedLanguages: string[];

	private panes: PaneComponent[] = [
		new PaneComponent()
	];


	constructor(public translationsService: TranslationsService,
		private languagesService: LanguagesService,
		private activatedRoute: ActivatedRoute) {
	}

	ngOnInit() {
		this.supportedLanguages = this.languagesService.supportedLanguages;
		this.languages = this.languagesService.languages;
	}

	addPane() {
		this.panes.push(new PaneComponent());
	}

	copyShareLink() {
		let salt: number[] = [];
		return 'http://localhost:4200#' + salt.join();
	}

	clearPanel() {
		//todo: add possibility to send text to the server
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
