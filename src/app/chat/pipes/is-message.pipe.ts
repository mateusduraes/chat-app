import { Pipe, PipeTransform } from '@angular/core';

import { Command } from '../models/command';
import { ChatEvent, ChatEventType } from '../models/events';
import { Message } from '../models/message';

@Pipe({
  name: 'isMessage',
})
export class IsMessagePipe implements PipeTransform {
  transform(event: ChatEvent<Command | Message>): event is ChatEvent<Message> {
    return event.type === ChatEventType.MESSAGE;
  }
}
