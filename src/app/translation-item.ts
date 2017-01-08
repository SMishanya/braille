export class TranslationItem {
    translation: { [key: string]: string };

    constructor(key: string, translation: string) {
        this[key] = translation;
    }
}
