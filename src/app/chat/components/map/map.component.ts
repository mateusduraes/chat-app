import { Component } from '@angular/core';

import { WidgetComponent } from './../widget';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent extends WidgetComponent {
  constructor() {
    super();
  }
}
