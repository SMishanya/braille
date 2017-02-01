import {Component} from "@angular/core";

@Component({
    selector: "my-nav",
    template: `
        <a routerLink="/translations">Saved translations</a>|
        <a routerLink="/translator">Translator</a>
        <hr>`
})
export class NavComponent {

}
