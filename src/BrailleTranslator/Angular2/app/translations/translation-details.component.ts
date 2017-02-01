import {Component} from "@angular/core";
import { TranslationModel } from "./translation.model";
import { TranslationsService } from "./translations.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    template: `
        <h2>Translation Details</h2>
        <b>Id: </b>{{translation.id}}<br>
        <b>Name: </b>{{translation.name}}
    `
})
export class TranslationDetailsComponent {

    constructor(
        private route: ActivatedRoute,
        private translationsService: TranslationsService) {

    }

    translation: TranslationModel;

    ngOnInit() {
        let id = parseInt(this.route.snapshot.params["id"], 10);
        this.translationsService
            .getTranslation(id)
            .subscribe(data => this.translation = data);
    }

}