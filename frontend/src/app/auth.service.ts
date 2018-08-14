import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Subject} from 'rxjs'

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) { }

    register(credentials) {
        return this.http.post<any>(`http://localhost:57478/api/account`,credentials).subscribe(res =>{
            this.credentials(res);
        });
    }

    login(credentials) {
        return this.http.post<any>(`http://localhost:57478/api/account/login`,credentials).subscribe(res =>{
            this.credentials(res);        
        });
    }

    credentials(res){
        localStorage.setItem("token", res);
    }
    
}