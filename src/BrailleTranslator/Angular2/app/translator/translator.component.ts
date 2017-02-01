import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { TranslationsService } from './services/translations.service';
import { LanguagesService } from './services/languages.service';
import { PaneComponent } from './pane/pane.component';

@Component({
    selector: 'braille-translator',
    template:
    `
        <my-nav></my-nav>
<div id="about">{{translationsService.getTranslation('about')}}</div>
<div id="translation-panel">
    <div id="translation" *ngFor="let lang of languages">
        <span id="languageName">{{translationsService.getLanguageName(lang)}}:</span> <span id="translationText">{{getBrailleTranslation(lang)}}</span>
    </div>
</div>
<div id="note">{{translationsService.getTranslation('note')}}</div>
<div class="container">
    <div class="row" id="panel">
        <div *ngFor="let pane of panes; let id = index">
            <braille-pane [paneId]="id" (click)="onPaneClicked(id)" [letter]="pane.letter"></braille-pane>
        </div>
    </div>
    <div class="row" id="addPane">
        <div>
            <button class="btn btn-success" (click)="addPane()">{{translationsService.getTranslation('add')}}</button>
            <button class="btn btn-info" ngxClipboard [cbContent]="copyShareLink()">{{translationsService.getTranslation('copyShareLink')}}</button>
            <button class="btn btn-danger" (click)="clearPanel()">{{translationsService.getTranslation('clear')}}</button>
            <div id="langSelect">
                <label for="langSelect">{{translationsService.getTranslation('selectLanguage')}}</label>
                <select class="form-control" (change)="onLanguageChanged($event.path[0].value)">
                    <option *ngFor="let lang of supportedLanguages" [value]="lang">{{translationsService.getLanguageName(lang)}}</option>
                </select>
            </div>
        </div>
    </div>
</div>
`,
    styles: [`

.container{
    margin: 10px auto;
    width: 98%;
}

#panel{
    border: 1px dashed gray;
    margin-bottom: 5px;
}

#langSelect{
    display: inline-block;
    float: right;
}

#langSelect>select{
    display: inline-block;
    width: 150px;
}

#translation-panel{
    margin: 10px 1%;
    background-color: #f7f7f7;
    overflow-x: scroll;
}

#translation{
    margin: 3px 5px;
    white-space: nowrap;
}

#languageName{
    display: inline-block;
    width: 90px;
    text-align: right;
}

#translationText{
    display: inline-block;
    font-family: monospace;
}

#about{
    margin: 5px 1%;
    text-align: justify;
}

#note{
    color: gray;
    margin-left: 1%;
}


`]
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
