import { Component } from "@angular/core";
import { TranslationsService } from './services/translations.service';

@Component({
    selector: "braille-navigation",
    template: `
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#">{{translationsService.getTranslation('TranslatorTitle')}}</a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
              <ul class="nav navbar-nav">
                <li><a routerLink="/translations">{{translationsService.getTranslation('TranslationsTitle')}}</a></li>
                <li><a routerLink="/translator">{{translationsService.getTranslation('TranslatorTitle')}}</a></li>
              </ul>
            </div><!--/.nav-collapse -->
          </div> 
        </nav>`,
    styles: [`
        nav{
            background-color: black;
        }
    `]
})
export class BrailleNavigationComponent {
	constructor(public translationsService: TranslationsService) { }
}
