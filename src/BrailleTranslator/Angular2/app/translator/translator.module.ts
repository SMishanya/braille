import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { ClipboardModule } from "./clipboard/clipboard.module";
import { routing } from "./translator.routing";
import { PaneComponent } from './pane/pane.component';
import { TranslatorComponent } from './translator.component';
import { TranslationsService } from './services/translations.service';
import { LanguagesService } from './services/languages.service';

@NgModule({
    declarations: [PaneComponent, TranslatorComponent],
    imports: [SharedModule, routing, ClipboardModule],
    exports: [TranslatorComponent],
    providers: [TranslationsService, LanguagesService]
})
export class TranslatorModule { }
