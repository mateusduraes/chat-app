import { Component, Input } from '@angular/core';

import { Command, CommandType } from './../../models/command';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss'],
})
export class CommandComponent {
  @Input() command: Command;
  commandTypeEnum = CommandType;
  isAnswered: boolean = false;

  constructor() {}

  onAnswer(response: string): void {
    console.log('response', response);
    this.isAnswered = true;
  }
}
