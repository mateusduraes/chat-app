export enum ChatEventType {
  MESSAGE = 'message',
  COMMAND = 'command',
}

export interface ChatEvent<T> {
  type: ChatEventType;
  payload: T;
}
