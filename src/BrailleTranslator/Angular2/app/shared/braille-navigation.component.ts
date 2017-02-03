import { Component } from "@angular/core";

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
                <span class="icon-bar"> </span>
              </button>
              <a class="navbar-brand" href="#">Project name</a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
              <ul class="nav navbar-nav">
                <li><a routerLink="/translations">Saved translations</a></li>
                <li><a routerLink="/translator">Translator</a></li>
              </ul>
            </div><!--/.nav-collapse -->
          </div>
        </nav>`,
    styles: [`
        nav{
            background-color: black;
        }
    `]
})
export class BrailleNavigationComponent {

}
