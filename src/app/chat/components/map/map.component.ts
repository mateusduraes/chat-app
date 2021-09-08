import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import * as L from 'leaflet';

import { WidgetComponent } from './../widget';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent extends WidgetComponent implements AfterViewInit {
  @Input() lat: number;
  @Input() lng: number;
  @ViewChild('mapElement', { static: false })
  mapElement: ElementRef<HTMLElement>;

  private map: L.Map;

  constructor() {
    super();
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map(this.mapElement.nativeElement, {
      center: [this.lat, this.lng],
      zoom: 15,
    });

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      },
    );
    tiles.addTo(this.map);

    const marker = L.marker([this.lat, this.lng]);
    marker.addTo(this.map);
  }
}
