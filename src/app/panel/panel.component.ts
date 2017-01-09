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
  public aaa: string = "";
  public aaa1: string = "1";

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

  getBrailleTranslation(lang: string): string {
    let result: string = '';
    this.panes.forEach(element => {
      result += this.translationsService.getBrailleTranslation(lang, element.letter.join('').toString());
    });
    return result;
  }

  onValueChanged1(aaa: string){
    let a = [0,0,0,0,0,0];
    console.log(aaa);
    if(aaa.indexOf('1') >=0){
      a[0] = 1;
    }
    if(aaa.indexOf('2') >=0){
      a[2] = 1;
    }
    if(aaa.indexOf('3') >=0){
      a[4] = 1;
    }
    if(aaa.indexOf('4') >=0){
      a[1] = 1;
    }
    if(aaa.indexOf('5') >=0){
      a[3] = 1;
    }
    if(aaa.indexOf('6') >=0){
      a[5] = 1;
    }
    this.aaa1 = a.join('');
  }

}
