import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from './api.service';

@Component({
  selector: 'questions',
  templateUrl: './questions.component.html'
})

export class QuestionsComponent implements OnInit {
  questions;
  
  constructor(private api:ApiService, private route: ActivatedRoute){}

  ngOnInit(){
    var quizId = this.route.snapshot.paramMap.get("quizId");
    this.api.getQuestions(quizId).subscribe(res => {
      this.questions = res;
    })
  }
}