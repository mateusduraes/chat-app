import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

import { WidgetComponent } from '../widget';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})
export class DateComponent extends WidgetComponent implements OnInit {
  @Input() dateISO: string;
  date: Date;
  daysToSelect: Date[];

  constructor(private datePipe: DatePipe) {
    super();
  }

  ngOnInit() {
    this.date = new Date(this.dateISO);
    const rangeDays = Array.from(Array(7));
    const saturday = 6;
    const sunday = 0;
    this.daysToSelect = rangeDays
      .map((_value, index) => {
        const date = new Date(this.date);
        date.setDate(this.date.getDate() + index + 1);
        return date;
      })
      .filter((date) => date.getDay() !== sunday && date.getDay() !== saturday);
  }

  answerDateQuestion(date: Date) {
    const weekday = this.datePipe.transform(date, 'E');
    const dayAndMonth = this.datePipe.transform(date, 'dd.MM');
    this.answerQuestion(`${weekday} - ${dayAndMonth}`);
  }
}
