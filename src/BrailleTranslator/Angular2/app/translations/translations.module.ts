import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { TranslationsService } from "./translations.service";
import { TranslationsListComponent } from "./translations-list.component";
import { TranslationDetailsComponent } from "./translation-details.component";
import { routing } from "./translation.routing";
import { TranslationComponent } from "./translation.component";

@NgModule({
    declarations: [TranslationComponent, TranslationsListComponent, TranslationDetailsComponent],
    imports: [SharedModule, routing],
    providers: [TranslationsService],
})
export class TranslationsModule { }

