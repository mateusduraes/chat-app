import { Pipe, PipeTransform } from '@angular/core';

import { Command } from '../models/command';
import { Message } from '../models/message';

import { ChatEvent, ChatEventType } from './../models/events';

@Pipe({
  name: 'isCommand',
})
export class IsCommandPipe implements PipeTransform {
  transform(event: ChatEvent<Command | Message>): event is ChatEvent<Command> {
    return event.type === ChatEventType.COMMAND;
  }
}
