import { ChatEventType, ChatEvent } from '../models/events';
import { Message } from '../models/message';

import { Command } from './../models/command';
import { IsMessagePipe } from './is-message.pipe';

describe('IsMessagePipe', () => {
  it('create an instance', () => {
    const pipe = new IsMessagePipe();
    expect(pipe).toBeTruthy();
  });

  it('should return #true if the event is a message', () => {
    const pipe = new IsMessagePipe();
    const isCommand = pipe.transform({
      type: ChatEventType.MESSAGE,
    } as ChatEvent<Command>);
    expect(isCommand).toBe(true);
  });

  it('should return #false if the event is a command', () => {
    const pipe = new IsMessagePipe();
    const isCommand = pipe.transform({
      type: ChatEventType.COMMAND,
    } as ChatEvent<Message>);
    expect(isCommand).toBe(false);
  });
});
