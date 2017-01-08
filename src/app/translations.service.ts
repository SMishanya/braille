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
      '101100': 'h'
    };
// switch(codes[b]) {
//       case '1245':
//         english[b] = 'g';
//         break;
//       case '125':
//         english[b] = 'h';
//         break;
//       case '24':
//         english[b] = 'i';
//         break;
//       case '245':
//         english[b] = 'j';
//         break;
//       case '13':
//         english[b] = 'k';
//         break;
//       case '123':
//         english[b] = 'l';
//         break;
//       case '134':
//         english[b] = 'm';
//         break;
//       case '1345':
//         english[b] = 'n';
//         break;
//       case '135':
//         english[b] = 'o';
//         break;
//       case '1234':
//         english[b] = 'p';
//         break;
//       case '12345':
//         english[b] = 'q';
//         break;
//       case '1235':
//         english[b] = 'r';
//         break;
//       case '234':
//         english[b] = 's';
//         break;
//       case '2345':
//         english[b] = 't';
//         break;
//       case '136':
//         english[b] = 'u';
//         break;
//       case '1236':
//         english[b] = 'v';
//         break;
//       case '1346':
//         english[b] = 'x';
//         break;
//       case '13456':
//         english[b] = 'y';
//         break;
//       case '1356':
//         english[b] = 'z';
//         break;
//       case '2456':
//         english[b] = 'w';
//         break;
//       case '256':
//         english[b] = '.';
//         break;
//       case '2':
//         english[b] = ',';
//         break;
//       case '26':
//         english[b] = '?';
//         break;
//       case '23':
//         english[b] = ';';
//         break;
//       case '25':
//         english[b] = ':';
//         break;
//       case '235':
//         english[b] = '!';
//         break;
//       case '236':
//         english[b] = '«';
//         break;
//       case '356':
//         english[b] = '»';
//         break;
//       case '36':
//         english[b] = '-';
//         break;
//       case '34':
//         english[b] = '/';
//         break;
//       case '46':
//         english[b] = '.';
//         break;
//       case '6':
//         english[b] = '';
//         break;
//       case '3456':
//         english[b] = '';
//         break;
//       case '2356':
//         english[b] = '|';
//         break;
//       case '126':
//         english[b] = '(';
//         break;
//       case '345':
//         english[b] = ')';
//         break;
//       default:
//         english[b] = '';
//     }
  }

  getTranslation(key: string): string {
    return this.translations[this.userLanguage][key];
  }

  getLanguageName(lang: string): string {
    return this.translations[lang]['language'];
  }

  getBrailleTranslation(lang: string, letter: string){
    let result = this.brailleDictionary[lang][letter];
    if(result != undefined)
      return result;
    else return '?';
  }
}
