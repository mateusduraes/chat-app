import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnInit } from '@angular/core';

import { ThemeOption } from './core/models/theme';
import { ThemeService } from './core/service/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @HostBinding('class') className = '';

  constructor(
    private themeService: ThemeService,
    private overlay: OverlayContainer,
  ) {}

  ngOnInit() {
    this.themeService.theme$.subscribe((theme) => {
      const isLightMode = theme === ThemeOption.LIGHT;
      const lightClassname = 'lightMode';
      this.className = isLightMode ? lightClassname : '';
      if (isLightMode) {
        this.overlay.getContainerElement().classList.add(lightClassname);
      } else {
        this.overlay.getContainerElement().classList.remove(lightClassname);
      }
    });
  }
}
