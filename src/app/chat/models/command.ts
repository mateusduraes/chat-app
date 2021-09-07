export enum CommandType {
  COMPLETE = 'complete',
  DATE = 'date',
  MAP = 'map',
  RATE = 'rate',
}

export interface Command {
  author: string;
  command: {
    type: CommandType;
    data: any;
  };
}
