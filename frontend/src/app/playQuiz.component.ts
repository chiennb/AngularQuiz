import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import {FinishedComponent} from './finished.component';
import { ApiService } from './api.service';

@Component({
  templateUrl: './playQuiz.component.html'
})

export class PlayQuizComponent implements OnInit {
  questions;
  step = 0;

  constructor(private api: ApiService, private route: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit() {
    var quizId = this.route.snapshot.paramMap.get("quizId");
    this.api.getQuestions(quizId).subscribe(res => {
      this.questions = res;

      this.questions.forEach(q => {
        q.answers = [q.correctAnswer, q.answer1, q.answer2, q.answer3];

        this.shuffle(q.answers);
      });
    })
  }

  finish(){
    var correct = 0;
    this.questions.forEach(q =>{
      if(q.selectedAnswer == q.correctAnswer){
        correct++;
      }
    });
    console.log(correct);

    const dialogRef = this.dialog.open(FinishedComponent, {
      data: {correct, total:this.questions.length}
    });
  }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // eslint-disable-line no-param-reassign
    }
  }
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}