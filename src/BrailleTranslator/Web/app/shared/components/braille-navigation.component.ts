import { Component, OnDestroy } from "@angular/core";
import { TranslationsService } from '../services/translations.service';
import { LanguagesService } from '../services/languages.service';
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { Subscription } from "rxjs/Rx";

@Component({
	selector: "braille-navigation",
	templateUrl: `./app/shared/components/braille-navigation.component.html`,
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
