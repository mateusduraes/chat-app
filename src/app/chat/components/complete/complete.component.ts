import { Component } from '@angular/core';

import { WidgetComponent } from '../widget';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.scss'],
})
export class CompleteComponent extends WidgetComponent {
  constructor() {
    super();
  }
}
