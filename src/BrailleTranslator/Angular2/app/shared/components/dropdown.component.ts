import { Component, OnInit, Input, Output } from '@angular/core';

import { KeyValuePair } from '../models/KeyValuePair';


@Component({
	selector: 'braille-dropdown',
	templateUrl: './app/shared/components/dropdown.component.html',
	styleUrls: ['./app/shared/components/dropdown.component.css']
})
export class DropdownComponent implements OnInit {
	private isCollapsed: boolean = true;
	private selectedItemIds: number[];
	private items: KeyValuePair<number, string>[] = [
		new KeyValuePair<number,string>(1, 'one'),
		new KeyValuePair<number,string>(2, 'two'),
		new KeyValuePair<number,string>(3, 'three'),
		new KeyValuePair<number,string>(4, 'four')
	];
	constructor() { }

	getResultView() {
		return this.items.map(x => x.value).join(', ');
	}

	ngOnInit() {
	}
};


