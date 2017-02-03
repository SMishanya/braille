import { Component } from "@angular/core";

@Component({
    selector: "app",
    template: `
        <braille-navigation></braille-navigation>
        <router-outlet></router-outlet>
        <braille-footer></braille-footer>

    `
})
export class AppComponent { }
