import { Component, OnDestroy } from "@angular/core";
import { TranslationsService } from './services/translations.service';
import { LanguagesService } from './services/languages.service';
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { Subscription } from "rxjs/Rx";

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
                <li><a *ngFor="let lang of languagesService.interfaceLanguages" (click)="changeLanguage(lang)" class="langSelect" routerLink="{{url}}">{{lang}}</a></li>
              </ul>
            </div><!--/.nav-collapse -->
          </div> 
        </nav>`,
	styles: [`
        nav{
            background-color: black;
        }

		a.langSelect{
			height: 50px;
			display: inline-block;
		}
    `]
})
export class BrailleNavigationComponent implements OnDestroy {
	public url;
	public sub: Subscription;

	constructor(private translationsService: TranslationsService, private languagesService: LanguagesService, private router: Router) {
		this.sub = this.router.events.subscribe(e => {
			if (e instanceof NavigationEnd) {
				this.url = e.url;
			}
		});

	}

	changeLanguage(lang: string) {
		this.translationsService.setLanguage(lang);
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}
}
