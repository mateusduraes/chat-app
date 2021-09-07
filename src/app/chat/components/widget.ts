import { Output, EventEmitter, Component } from '@angular/core';

@Component({
  selector: 'app-widget',
  template: '',
})
export class WidgetComponent {
  @Output() answer: EventEmitter<string> = new EventEmitter();
}
