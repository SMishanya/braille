import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

const appRoutes: Routes  = [
    { path: "", redirectTo: "translator", pathMatch: "full" },
    { path: "translations", loadChildren: "app/translations/translations.module#TranslationsModule"  }
];

export const routing: ModuleWithProviders  = RouterModule.forRoot(appRoutes);