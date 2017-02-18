import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { BrailleTranslationsService } from "./brailleTranslations.service";
import { TranslationsListComponent } from "./translations-list.component";
import { TranslationDetailsComponent } from "./translation-details.component";
import { routing } from "./translation.routing";
import { TranslationComponent } from "./translation.component";
import { RowColorDirective } from '../shared/directives/rowColor.directive';

@NgModule({
	declarations: [TranslationComponent, TranslationsListComponent, TranslationDetailsComponent, RowColorDirective],
    imports: [SharedModule, routing],
	providers: [BrailleTranslationsService],
})
export class TranslationsModule { }

