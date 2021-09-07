import { Component } from '@angular/core';

import { WidgetComponent } from './../widget';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss'],
})
export class RateComponent extends WidgetComponent {
  constructor() {
    super();
  }
}
