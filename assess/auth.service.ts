import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface user {
    email: string;
    role: string;
    valid: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    url = "http://localhost:3000"
    constructor(private http: HttpClient){}

    login(email: string, password: string){
        return this.http.post<user>(this.url + '/api/auth', {email: email, password: password});
    }
}