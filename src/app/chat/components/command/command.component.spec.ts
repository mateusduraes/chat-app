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
});
