import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'braille-pane',
  templateUrl: './pane.component.html',
  styleUrls: ['./pane.component.css']
})
export class PaneComponent implements OnInit {
  @Input() public paneId: number;

  @Input() letter: number[] = [0, 0, 0, 0, 0, 0];

  getLetter(): string{
    return this.letter.join('');
  }

  constructor() { }

  ngOnInit() {
  }
}
