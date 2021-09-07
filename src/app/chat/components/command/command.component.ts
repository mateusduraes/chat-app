import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss'],
})
export class CommandComponent {
  @Input() command: any;
  constructor() {}
}
