import { Component, Input } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('panelSize', [
      state('0', style({ height: '0', visibility: 'hidden' })),
      state('1', style({ height: '60px', visibility: 'visible' })),
      transition('0 => 1', animate('300ms')),
      transition('1 => 0', animate('100ms'))
    ]),
    trigger('panelVisible', [
      state('0', style({ visibility: 'hidden' })),
      state('1', style({ visibility: 'visible' })),
      transition('0 => 1', animate('300ms')),
      transition('1 => 0', animate('10ms'))
    ])
  ]
})
export class CardComponent {
    @Input() card : Card;

    status = 0;

    collapse() {
        this.status = 0;
    }

    expand() {
        this.status = 1;
    }

}
