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
    
    //gets user name
    getUser(username:string) {
        return this.http.get('api/user', {
          params: { username: username }
        });
    }
}