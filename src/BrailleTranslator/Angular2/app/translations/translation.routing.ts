import { RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { TranslationComponent } from "./translation.component";
import { TranslationsListComponent } from "./translations-list.component";
import { TranslationDetailsComponent } from "./translation-details.component";

const routes = [
    {
        path: "",
        component: TranslationComponent,
        children: [
            { path: "", component: TranslationsListComponent },
            { path: ":id", component: TranslationDetailsComponent }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
