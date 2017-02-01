import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";

import { TranslatorModule } from "./translator/translator.module";
import { AppComponent } from "./app.component";
import { routing } from "./app.routes";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        routing,
        TranslatorModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }