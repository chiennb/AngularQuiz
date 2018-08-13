import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {ApiService} from './api.service';

@Component({
  selector: 'question',
  templateUrl: './question.component.html'
})

export class QuestionComponent implements OnInit {
  question = {};
  quizId;

  constructor(private api:ApiService, private route: ActivatedRoute){}
  ngOnInit(){
    this.quizId = this.route.snapshot.paramMap.get("quizId");
    console.log(this.quizId);
      this.api.questionSelected.subscribe(question => this.question = question);
  }

  post(question) {
    question.quizId = this.quizId;
    this.api.postQuestion(question);
  }
}