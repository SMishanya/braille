import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClipboardModule } from 'ngx-clipboard';

import { AppComponent } from './app.component';
import { PaneComponent } from './pane/pane.component';
import { PanelComponent } from './panel/panel.component';
import { TranslationsService } from './translations.service';
import { LanguagesService } from './languages.service';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    PaneComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ClipboardModule,
    routing
  ],
  providers: [TranslationsService, LanguagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
