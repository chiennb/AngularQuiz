import { Component } from '@angular/core';

import {QuestionComponent} from './question.component';
import {QuestionsComponent} from './questions.component';
import {NavComponent} from './nav.component';

@Component({
  selector: 'app-root',
  template: '<nav></nav><router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'app';
}
