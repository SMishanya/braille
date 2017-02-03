import { Component } from "@angular/core";

@Component({
    selector: "app",
    template: `
        <nav></nav>
        <router-outlet></router-outlet>
        <braille-footer></braille-footer>

    `
})
export class AppComponent { }
