import {
	Component, EventEmitter, Input, trigger, state, style, transition, animate, Output } from "@angular/core";

@Component({
	selector: "braille-popup",
	animations: [
		trigger('animation', [
			state('in', style({
				transform: 'scale(1, 1)'
			})),
			transition('void => *', [
				style({
					transform: 'scale(0, 0)'}),
				animate(200)
			]),
			transition('* => void', [
				animate(200, style({transform: 'scale(0, 0)' }))
			])
		])
	],
	templateUrl: './app/shared/components/popup.component.html',
	styleUrls: ['./app/shared/components/popup.component.css']
})
export class PopupComponent {
	@Input() headerText: string;
	@Input() on: boolean = false;

	@Output() popupClosed = new EventEmitter<boolean>();

	close() {
		this.on = false;
		this.popupClosed.emit(true);
	}
}
