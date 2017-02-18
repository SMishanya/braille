import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { TranslationModel } from "./translation.model";

@Injectable()
export class BrailleTranslationsService {

	constructor(private http: Http) { }

	translations: TranslationModel[];

	getTranslations() {
		return this.http.get(`/api/translations`);
	}

	getTranslation(id: number) {
		return this.http.get(`/api/translation?id=` + id)
	}
}
