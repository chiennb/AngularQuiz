import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
    selector: 'logout',
    templateUrl: './logout.component.html'
})

export class LogoutComponent implements OnInit {
    form
    constructor(private api: AuthService, private fb: FormBuilder) {
        this.form = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

    ngOnInit() {

    }
}