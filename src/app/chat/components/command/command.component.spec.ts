import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandType } from './../../models/command';
import { CommandComponent } from './command.component';

describe('CommandComponent', () => {
  let component: CommandComponent;
  let fixture: ComponentFixture<CommandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommandComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandComponent);
    component = fixture.componentInstance;
    component.command = {
      author: 'ottonova-bot',
      command: {
        type: CommandType.COMPLETE,
        data: ['Yes', 'No'],
      },
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit answered value via the event emitter when answering the question', () => {
    const eventSpy = spyOn(component.userAnswer, 'emit');
    const stubAnswer = 'test';
    component.onAnswer(stubAnswer);
    expect(eventSpy).toHaveBeenCalledWith(stubAnswer);
  });
});
