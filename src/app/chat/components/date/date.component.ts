import { Component } from '@angular/core';

import { WidgetComponent } from '../widget';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})
export class DateComponent extends WidgetComponent {
  constructor() {
    super();
  }
}
