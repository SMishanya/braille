import { TranslationItem } from './translation-item';

export class TranslationsService {
  userLanguage: string = 'en';

  private translations: { [language: string]: ({ [key: string]: string })[] }[] = [];
  private brailleDictionary: { [language: string]: ({ [key: string]: string }[]) }[] = [];
  private numbers = {
    '100000' : '1',
    '101000' : '2',
    '110000' : '3',
    '110100' : '4',
    '100100' : '5',
    '111000' : '6',
    '111100' : '7',
    '101100' : '8',
    '011000' : '9',
    '011100' : '0'
  };

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
      
      '111011': 'and',
      '111111': 'for',
      '101111': 'of',
      '011011': 'the',
      '011111': 'with',
      '100001': 'ch',
      '101001': 'gh',
      '110001': 'sh',
      '110101': 'th',
      '100101': 'wh',
      '111001': 'ed',
      '111101': 'er',
      '101101': 'ou',
      '011001': 'ow',
      '000110': 'in',
      '001101': '.',
      '001000': ',',
      '001001': '?',
      '001010': ';',
      '001100': ':',
      '001110': '!',
      '001011': '«', //or ?
      '000111': '»', //or 'by'
      '000011': '-',
      '010010': '/',
      '010001': '.',
      '000010': '\'',
      '001111': '|' //it is really ( or )
    };
  }

  getTranslation(key: string): string {
    return this.translations[this.userLanguage][key];
  }

  getLanguageName(lang: string): string {
    return this.translations[lang]['language'];
  }

  getBrailleTranslation(lang: string, letter: string, previousElement: string){
    if(letter == '010111') return '';
    let isCapital = false;
    if(previousElement != null){
      switch(previousElement){
        case '010111':
          console.log(this.numbers);
          console.log(letter);
          let number = this.numbers[letter];
          if(number === undefined)
            return '�';
          return number;
        case '000001':
          isCapital = true;
      }
    }
    let result = this.brailleDictionary[lang];
    if(result != undefined)
      result = result[letter];
    if(result != undefined)
      return isCapital?result.toUpperCase():result;
    else return '�';
  }
}
