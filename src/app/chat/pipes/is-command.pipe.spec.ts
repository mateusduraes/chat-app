import { Command } from '../models/command';
import { ChatEvent, ChatEventType } from '../models/events';
import { Message } from '../models/message';

import { IsCommandPipe } from './is-command.pipe';

describe('IsCommandPipe', () => {
  it('create an instance', () => {
    const pipe = new IsCommandPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return #true if the event is a command', () => {
    const pipe = new IsCommandPipe();
    const isCommand = pipe.transform({
      type: ChatEventType.COMMAND,
    } as ChatEvent<Command>);
    expect(isCommand).toBe(true);
  });

  it('should return #false if the event is a message', () => {
    const pipe = new IsCommandPipe();
    const isCommand = pipe.transform({
      type: ChatEventType.MESSAGE,
    } as ChatEvent<Message>);
    expect(isCommand).toBe(false);
  });
});
