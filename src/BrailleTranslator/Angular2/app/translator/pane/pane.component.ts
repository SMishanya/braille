import { Component, OnInit, Input, Output } from '@angular/core';


@Component({
    selector: 'braille-pane',
    template: `
<div class="col-xs-12 pane">
    <div class="row">
        <div *ngFor="let part of letter; let i = index" class="col-xs-6 circleWrapper">
            <span [class.circle]="!letter[i]" [class.activeCircle]="letter[i]" id="{{i}}" (click)="letter[i] = 1 - letter[i]"></span>
        </div>
    </div>
</div>
`,
    styles: [`
.pane{
    background-color: #f7f7f7;
    display: block;
    position: relative;
    height: 100px;
    width: 70px;
    margin: 3px;
}

.circleWrapper{
    display: block;
    padding: 0, auto;
}

.circle{
    background-color: #e5e5e5;
    display: block;
    position: relative;
    border-radius: 100px;
    width: 20px;
    height: 20px;
    margin-top: 10px;
    margin-left: -7px;
}

.circle:hover{
    background-color: #aaaaaa;
    cursor: pointer;
}

.activeCircle{
    background-color: black;
    display: block;
    position: relative;
    border-radius: 100px;
    width: 20px;
    height: 20px;
    margin-top: 10px;
    margin-left: -7px;
}

.activeCircle:hover{
    cursor: pointer;
}
`]
})
export class PaneComponent implements OnInit {
    @Input() public paneId: number;

    @Input() letter: number[] = [0, 0, 0, 0, 0, 0];

    getLetter(): string {
        return this.letter.join('');
    }

    constructor() { }

    ngOnInit() {
    }
}
