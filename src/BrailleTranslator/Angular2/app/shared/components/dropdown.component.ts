import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

import { KeyValuePair } from '../models/KeyValuePair';
import { TranslationsService } from '../services/translations.service';

@Component({
	selector: 'braille-dropdown',
	templateUrl: './app/shared/components/dropdown.component.html',
	styleUrls: ['./app/shared/components/dropdown.component.css']
})
export class DropdownComponent implements OnInit {
	@Input() multipleSelect: boolean = true;

	// Use it to init dropdown items
	@Input() initialItems: KeyValuePair<any, any>[] = [];

	// Use this to init dropdown placeholder
	@Input() placeholder: string;

	// Use it to make some actions when user clicked on dropdown item
	@Output() checked = new EventEmitter<boolean>();

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
		if (this.multipleSelect) {
			let item = this.checkedFields.indexOf(id);
			if (item == -1)
				this.checkedFields.push(id);
			else
				this.checkedFields.splice(item, 1);
		}
		else {
			this.items.forEach(x => { if (x.item.key != id) x.checked = false; });
		}
		this.checked.emit(true);
		this.getResultView();
	}

	ngOnInit() {
		console.log(this.placeholder);
		for (let item of this.initialItems)
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

