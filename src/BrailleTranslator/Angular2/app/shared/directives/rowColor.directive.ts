import { Directive, Input, ElementRef, Renderer, OnInit } from '@angular/core';

@Directive({
	selector: '[rowColor]'
})
export class RowColorDirective implements OnInit{
	@Input('rowId') private rowId: number;

	constructor(private elementRef: ElementRef, private renderer: Renderer) {
	}

	ngOnInit(){
		this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', this.rowId % 2 == 1 ? '#d5d5d5' : '#f7f7f7');
	}
}