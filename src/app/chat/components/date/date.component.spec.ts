import { DatePipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateComponent } from './date.component';

describe('DateComponent', () => {
  let component: DateComponent;
  let fixture: ComponentFixture<DateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DateComponent],
      providers: [DatePipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateComponent);
    component = fixture.componentInstance;
    component.dateISO = '2021-09-05T21:00:10.016Z';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
