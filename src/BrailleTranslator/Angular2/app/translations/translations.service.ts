import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { TranslationModel } from "./translation.model";

@Injectable()
export class TranslationsService {

    translations: TranslationModel[] = [
        new TranslationModel(0, "Translation 0"),
        new TranslationModel(1, "Translation 1"),
        new TranslationModel(2, "Translation 2"),
        new TranslationModel(3, "Translation 3"),
        new TranslationModel(4, "Translation 4"),
    ];

    getTranslations(): Observable<TranslationModel[]> {
        return Observable.of(this.translations);
    }

    getTranslation(id: number): Observable<TranslationModel> {
        return Observable.of(this.translations[id]);
    }
}
