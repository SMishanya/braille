import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { TranslationsService } from '../translations.service';
import { LanguagesService } from '../languages.service';
import { PaneComponent } from '../pane/pane.component';

@Component({
  selector: 'braille-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  private languages: string[];
  private supportedLanguages: string[];
  private letters = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1],
    [0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 1],
    [0, 0, 0, 1, 1, 0],
    [0, 0, 0, 1, 1, 1],
    [0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 1],
    [0, 0, 1, 0, 1, 0],
    [0, 0, 1, 0, 1, 1],
    [0, 0, 1, 1, 0, 0],
    [0, 0, 1, 1, 0, 1],
    [0, 0, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1],
    [0, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 1],
    [0, 1, 0, 0, 1, 0],
    [0, 1, 0, 0, 1, 1],
    [0, 1, 0, 1, 0, 0],
    [0, 1, 0, 1, 0, 1],
    [0, 1, 0, 1, 1, 0],
    [0, 1, 0, 1, 1, 1],
    [0, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 0, 1],
    [0, 1, 1, 0, 1, 0],
    [0, 1, 1, 0, 1, 1],
    [0, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 0, 1],
    [0, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 1, 1],
    [1, 0, 0, 1, 0, 0],
    [1, 0, 0, 1, 0, 1],
    [1, 0, 0, 1, 1, 0],
    [1, 0, 0, 1, 1, 1],
    [1, 0, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 1],
    [1, 0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1, 1],
    [1, 0, 1, 1, 0, 0],
    [1, 0, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 0],
    [1, 0, 1, 1, 1, 1],
    [1, 1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 1],
    [1, 1, 0, 0, 1, 0],
    [1, 1, 0, 0, 1, 1],
    [1, 1, 0, 1, 0, 0],
    [1, 1, 0, 1, 0, 1],
    [1, 1, 0, 1, 1, 0],
    [1, 1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0, 0],
    [1, 1, 1, 0, 0, 1],
    [1, 1, 1, 0, 1, 0],
    [1, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 0, 0],
    [1, 1, 1, 1, 0, 1],
    [1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1]
  ];
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
    this.panes.forEach(
      (element) => { salt.push(parseInt(element.letter.join(''), 2)) }
    );
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
