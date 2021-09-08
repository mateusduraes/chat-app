import { Output, EventEmitter, Component } from '@angular/core';

@Component({
  selector: 'app-widget',
  template: '',
})
export class WidgetComponent {
  @Output() answer: EventEmitter<string> = new EventEmitter();
  answered: boolean = false;
  questionAnswer: string;

  answerQuestion(response: string | number) {
    if (this.answered) {
      return;
    }

    this.answer.emit(String(response));
    this.questionAnswer = String(response);
    this.answered = true;
  }
}
