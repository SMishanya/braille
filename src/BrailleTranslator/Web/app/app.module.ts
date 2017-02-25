import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";

import { SharedModule } from "./shared/shared.module";
import { TranslatorModule } from "./translator/translator.module";
import { AppComponent } from "./app.component";
import { routing } from "./app.routes";
import { TranslationsService } from './shared/services/translations.service';
import { LanguagesService } from './shared/services/languages.service';

@NgModule({
    imports: [
        SharedModule,
        BrowserModule,
        HttpModule,
        routing,
        TranslatorModule
    ],
    declarations: [
        AppComponent
    ],
	bootstrap: [AppComponent],
	providers: [TranslationsService, LanguagesService]
})
export class AppModule { }