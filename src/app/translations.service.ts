import { TranslationItem } from './translation-item';

export class TranslationsService {
  userLanguage: string = 'en';

  private translations: { [language: string]: ({ [key: string]: string })[] }[] = [];
  private brailleDictionary: { [language: string]: ({ [key: string]: string }[]) }[] = [];

  constructor() {
    this.translations['en'] = {
      'selectLanguage': 'Select language',
      'language': 'English',
      'add': 'Add',
      'clear': 'Clear'
    };
    this.translations['ru'] = {
      'selectLanguage': 'Выберите язык',
      'language': 'Русский',
      'add': 'Добавить',
      'clear': 'Очистить'
    };
    this.translations['uk'] = {
      'selectLanguage': 'Оберіть мову',
      'language': 'Українська',
      'add': 'Додати',
      'clear': 'Очистити'
    };


    this.brailleDictionary['en'] = {
      '000000': ' ',
      '100000': 'a',
      '101000': 'b',
      '110000': 'c',
      '110100': 'd',
      '100100': 'e',
      '111000': 'f',
      '111100': 'g',
      '101100': 'h',
      '011000': 'i',
      '011100': 'j',
      '100010': 'k',
      '101010': 'l',
      '110010': 'm',
      '110110': 'n',
      '100110': 'o',
      '111010': 'p',
      '111110': 'q',
      '101110': 'r',
      '011010': 's',
      '011110': 't',
      '100011': 'u',
      '101011': 'v',
      '110011': 'x',
      '110111': 'y',
      '100111': 'z',
      '011101': 'w',
      '001101': '.',
      '001000': ',',
      '001001': '?',
      '001010': ';',
      '001100': ':',
      '001110': '!',
      '001011': '«',
      '000111': '»',
      '000011': '-',
      '010010': '/',
      '010001': '.',
      '000010': '\'',
      '000110': '*',
      '001111': '|',
      '101001': '(',
      '010110': ')'
    };
  }

  getTranslation(key: string): string {
    return this.translations[this.userLanguage][key];
  }

  getLanguageName(lang: string): string {
    return this.translations[lang]['language'];
  }

  getBrailleTranslation(lang: string, letter: string){
    let result = this.brailleDictionary[lang];
    if(result != undefined)
      result = result[letter];
    if(result != undefined)
      return result;
    else return '?';
  }
}
