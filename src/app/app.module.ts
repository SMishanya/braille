import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PaneComponent } from './pane/pane.component';
import { PanelComponent } from './panel/panel.component';
import { TranslationsService } from './translations.service';
import { LanguagesService } from './languages.service';

@NgModule({
  declarations: [
    AppComponent,
    PaneComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TranslationsService, LanguagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
