import { Component } from '@angular/core';

@Component({
  selector: 'question',
  templateUrl: './question.component.html'
})

export class QuestionComponent {
  title = 'app';
  question

  post(question) {
    console.log(question);
  }
}