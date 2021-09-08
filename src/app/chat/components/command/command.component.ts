import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Command, CommandType } from './../../models/command';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss'],
})
export class CommandComponent {
  @Input() command: Command;
  @Output() userAnswer: EventEmitter<string> = new EventEmitter();
  commandTypeEnum = CommandType;

  onAnswer(response: string): void {
    this.userAnswer.emit(response);
  }
}
