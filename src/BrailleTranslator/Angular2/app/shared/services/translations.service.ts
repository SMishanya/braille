﻿import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class TranslationsService {

	userLanguage: string = 'en';
	isReady: boolean = false;

	private translations: { [language: string]: ({ [key: string]: string })[] }[] = [];
	private brailleDictionary: { [language: string]: ({ [key: string]: string }[]) }[] = [];
	private numbers = {
		'100000': '1',
		'101000': '2',
		'110000': '3',
		'110100': '4',
		'100100': '5',
		'111000': '6',
		'111100': '7',
		'101100': '8',
		'011000': '9',
		'011100': '0'
	};

	constructor(private http: Http) {
		this.translations['en'] = {
			'title': 'Braille translator',
			'about': 'Braille is a tactile writing system used by people who are blind or visually impaired. On this page you can translate any sequence of characters. By default we translate into english language and language which is set in your browser settings (if supported).',
			'note': 'Note: symbol \'«\' also can be interpreted as \'?\', \'»\' as \'by\' and  \'|\' is really \'(\' or  \')\'',
			'selectLanguage': 'Select language',
			'language': 'English',
			'add': 'Add',
			'copyShareLink': 'Copy link to share',
			'clear': 'Clear'
		};
		this.translations['ru'] = {
			'title': 'Переводчик брайля',
			'about': 'Шрифт Брайля — рельефно-точечный тактильный шрифт, предназначенный для письма и чтения незрячими и плохо видящими людьми. На данной странице у Вас есть возможность перевести для себя любую надпись, написанную этим шрифтом в шеститочечной системе. Для перевода достаточно ввести в дешифратор символы, которые Вас интересуют и в режиме реального времени они будут "переведены" на выбраный Вами язык. По умолчанию перевод происходит на английский и язык, определенный в настройках Вашего браузера.',
			'note': 'Примечание: на самом деле, символ | означает символ \'(\', или \')\'',
			'selectLanguage': 'Выберите язык',
			'language': 'Русский',
			'add': 'Добавить',
			'copyShareLink': 'Скопировать ссылку на перевод',
			'clear': 'Очистить'
		};
		this.translations['uk'] = {
			'title': 'Перекладач брайля',
			'about': 'Шрифт Брайля — рельєфно-крапковий шрифт для написання і читання сліпими. На даній сторінці у Вас є можливість перекласти для себе будь-який напис, написаний цим шрифтом у шеститочковій системі. Для перекладу достатньо ввести послідовність символів, які Вас цікавлять та в режимі реального часу їх буде перекладено на обрану Вами мову. За замовчуванням переклад відбувається на англійську та мову, обрану у налаштуваннях браузера.',
			'note': 'Примітка: насправді, символ | позначає символ \'(\', або \')\'',
			'selectLanguage': 'Оберіть мову',
			'language': 'Українська',
			'add': 'Додати',
			'copyShareLink': 'Скопіювати посилання на переклад',
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

		this.brailleDictionary['uk'] = {
			'000000': ' ',
			'100000': 'а',
			'101000': 'б',
			'011101': 'в',
			'111100': 'г',
			'111101': 'ґ',
			'110100': 'д',
			'100100': 'е',
			'010110': 'є',
			'011100': 'ж',
			'100111': 'з',
			'011000': 'и',
			'110111': 'і',
			'110101': 'ї',
			'111011': 'й',
			'100010': 'к',
			'101010': 'л',
			'110010': 'м',
			'110110': 'н',
			'100110': 'о',
			'111010': 'п',
			'101110': 'р',
			'011010': 'с',
			'011110': 'т',
			'100011': 'у',
			'111000': 'ф',
			'101100': 'х',
			'110000': 'ц',
			'111110': 'ч',
			'100101': 'ш',
			'110011': 'щ',
			'011111': 'ь',
			'101101': 'ю',
			'111001': 'я',
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
			'001111': '|' //it is really ( or )
		};

		this.brailleDictionary['ru'] = {
			'000000': ' ',
			'100000': 'а',
			'101000': 'б',
			'011101': 'в',
			'111100': 'г',
			'110100': 'д',
			'100100': 'е',
			'100001': 'ё',
			'011100': 'ж',
			'100111': 'з',
			'011000': 'и',
			'110111': 'і',
			'110101': 'ї',
			'111011': 'й',
			'100010': 'к',
			'101010': 'л',
			'110010': 'м',
			'110110': 'н',
			'100110': 'о',
			'111010': 'п',
			'101110': 'р',
			'011010': 'с',
			'011110': 'т',
			'100011': 'у',
			'111000': 'ф',
			'101100': 'х',
			'110000': 'ц',
			'111110': 'ч',
			'100101': 'ш',
			'110011': 'щ',
			'101111': 'ъ',
			'011011': 'ы',
			'011111': 'ь',
			'011001': 'э',
			'101101': 'ю',
			'111001': 'я',
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
			'101001': '(',
			'010110': ')',
			'001111': '|' //it is really ( or )
		};
	}

	getTranslation(key: string): string {
		return this.translations[this.userLanguage][key];
	}

	getLanguageName(lang: string): string {
		return this.translations[lang]['language'];
	}

	getBrailleTranslation(lang: string, letter: string, previousElement: string) {
		if (letter == '010111' || letter == '000001')
			return '';
		let isCapital = false;
		if (previousElement != null) {
			switch (previousElement) {
				case '010111':
					let number = this.numbers[letter];
					if (number === undefined)
						return '�';
					return number;
				case '000001':
					isCapital = true;
			}
		}
		let result = this.brailleDictionary[lang];
		if (result != undefined)
			result = result[letter];
		if (result != undefined)
			return isCapital ? result.toUpperCase() : result;
		else return '�';
	}

	public setLanguage(language: string) {
		this.userLanguage = language;
		this.http.get(`/api/dictionary?language=` + language).subscribe(data => {
			this.isReady = true;
			//this.translations[language] = data.json();
			//console.log(data.json());

		});
	}
}
