import { Component, OnInit, Input, Output } from '@angular/core';

import { KeyValuePair } from '../models/KeyValuePair';


@Component({
	selector: 'braille-dropdown',
	templateUrl: './app/shared/components/dropdown.component.html',
	styleUrls: ['./app/shared/components/dropdown.component.css']
})
export class DropdownComponent implements OnInit {
	private resultView: string;
	private isCollapsed: boolean = true;
	private items: DropdownRow<number, string>[] = [
		new DropdownRow<number,string>(1, 'one'),
		new DropdownRow<number,string>(2, 'two'),
		new DropdownRow<number,string>(3, 'three'),
		new DropdownRow<number,string>(4, 'four')
	];
	constructor() { }

	getResultView() {
		let a: string[] = [];
		this.items.forEach(y => { if (y.checked) a.push(y.item.value) });
		this.resultView = a.join(', ');
	}

	itemChecked(id: number) {
		let index = this.items.map(x => x.item.key).indexOf(id);
		this.items[index].checked = !this.items[index].checked;
		this.getResultView();
	}

	ngOnInit() {
	}
};

class DropdownRow<TKey, TValue> {
	public checked: boolean = false;
	public item: KeyValuePair<TKey, TValue>;

	constructor(key: TKey, value:TValue) {
		this.item = new KeyValuePair<TKey, TValue>(key, value);
	}
};

