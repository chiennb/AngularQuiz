import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

import {ApiService} from './api.service';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question.component';
import { QuestionsComponent } from './questions.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule,

    BrowserAnimationsModule, 
    MatButtonModule, 
    MatInputModule,
    MatCardModule,
    MatListModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
