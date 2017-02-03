import {Component} from "@angular/core";

@Component({
    selector: "braille-navigation",
    template: `
        <a routerLink="/translations">Saved translations</a>|
        <a routerLink="/translator">Translator</a>
        <hr>`
})
export class NavComponent {

}
