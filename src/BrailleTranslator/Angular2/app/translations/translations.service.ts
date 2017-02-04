import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { TranslationModel } from "./translation.model";

@Injectable()
export class TranslationsService {

	constructor(private http: Http) { }

	translations: TranslationModel[] = [
		new TranslationModel(0, "Translation 0", 0),
		new TranslationModel(1, "Translation 1", 0),
		new TranslationModel(2, "Translation 2", 0),
		new TranslationModel(3, "Translation 3", 0),
		new TranslationModel(4, "Translation 4", 0),
	];

	getTranslations() {
		return this.http.get(`/api/translations`);
	}

	getTranslation(id: number): Observable<TranslationModel> {
		return Observable.of(this.translations[id]);
	}
}
