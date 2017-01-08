import { Component, OnInit } from '@angular/core';

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
  private listLanguages: string[];
  private letters: { [a: string]: string };
  private panes: PaneComponent[] = [
    new PaneComponent()
  ];

  constructor(public translationsService: TranslationsService,
    private languagesService: LanguagesService) {
  }

  ngOnInit() {
    this.supportedLanguages = this.languagesService.supportedLanguages;
    this.languages = this.languagesService.languages;
  }

  addPane() {
    this.panes.push(new PaneComponent());
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

  onValueChanged(selectedLang: any) {
    if (selectedLang === 'en') {
      this.languagesService.languages.splice(1, 1);
    }
    else if (this.languagesService.languages.length > 1) {
      this.languagesService.languages[1] = selectedLang;
    }
    else {
      this.languagesService.languages.push(selectedLang);
    }
    console.log(this.panes);
  }

  getBrailleTranslation(): string {
    let result: string = '';
    this.panes.forEach(element => {
      result += this.translationsService.getBrailleTranslation('en', element.letter.join('').toString());
    });
    return result;
  }
}
