import { Component } from "@angular/core";

@Component({
    selector: "app",
    template: `
        <my-nav></my-nav>
        <router-outlet></router-outlet>
    `
})
export class AppComponent { }
