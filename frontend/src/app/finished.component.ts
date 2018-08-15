import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
    template: `<h1>Your score</h1>
    <h2>{{data.correct}}/{{data.total}}</h2>
    `
})

export class FinishedComponent {
    form
    constructor(@Inject(MAT_DIALOG_DATA) private data) {
    }
}