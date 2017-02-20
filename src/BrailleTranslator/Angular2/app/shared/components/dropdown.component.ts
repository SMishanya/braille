import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

import { KeyValuePair } from '../models/KeyValuePair';
import { TranslationsService } from '../services/translations.service';

@Component({
	selector: 'braille-dropdown',
	templateUrl: './app/shared/components/dropdown.component.html',
	styleUrls: ['./app/shared/components/dropdown.component.css']
})
export class DropdownComponent implements OnInit {
	@Input() initialItems: KeyValuePair<any, any>[] = [];
	@Output() checked = new EventEmitter<boolean>();
	@Input() placeholder: string;

	private isCollapsed: boolean = true;
	private resultView: string = '';

	private checkedFields: any[] = [];
	private items: DropdownRow<number, string>[] = []

	constructor(public translationsService: TranslationsService) { }

	getResultView() {
		let listToJoin: string[] = [];
		this.items.forEach(y => { if (y.checked) listToJoin.push(y.item.value) });
		this.resultView = listToJoin.map(l => this.translationsService.getLanguageName(l)).join(', '); 
	}

	itemChecked(id: number) {
		let index = this.items.map(x => x.item.key).indexOf(id);
		this.items[index].checked = !this.items[index].checked;

		let item = this.checkedFields.indexOf(id);
		if (item == -1)
			this.checkedFields.push(id);
		else
			this.checkedFields.splice(item, 1);
		this.checked.emit(true);
		this.getResultView();
	}

	ngOnInit() {
		console.log(this.placeholder);
		for(let item of this.initialItems)
			this.items.push(new DropdownRow(item.key, item.value));
	}
};

class DropdownRow<TKey, TValue> {
	public checked: boolean = false;
	public item: KeyValuePair<TKey, TValue>;

	constructor(key: TKey, value: TValue) {
		this.item = new KeyValuePair<TKey, TValue>(key, value);
	}
};

