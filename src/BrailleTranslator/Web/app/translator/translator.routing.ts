import { RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { TranslatorComponent } from "./translator.component";

export const routing: ModuleWithProviders = RouterModule.forChild([
    { path: "translator", component: TranslatorComponent }
]);
