import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })

  export class UsersService {
    constructor(private http:HttpClient) { }

    genHeadersJSON() {
        return {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
      }
    
    getUser(username:string) {
        return this.http.get('api/user', {
          params: { username: username }
        });
    }

    updateEmail(username:string, email:string) {
        let body = {
          'username': username,
          'email': email
        };
        return this.http.post(`api/email`, JSON.stringify(body), this.genHeadersJSON());
    }
}