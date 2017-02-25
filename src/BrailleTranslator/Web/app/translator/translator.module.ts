import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { routing } from "./translator.routing";
import { PaneComponent } from './pane/pane.component';
import { TranslatorComponent } from './translator.component';

@NgModule({
    declarations: [PaneComponent, TranslatorComponent],
    imports: [SharedModule, routing],
    exports: [TranslatorComponent]
})
export class TranslatorModule { }
