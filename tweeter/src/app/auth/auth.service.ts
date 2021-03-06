import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
    constructor(
        private httpClient: HttpClient
    ){}

    signUp(newUser): Observable<any> {
        return this.httpClient.post('http://localhost:3000/users', newUser);
    } 

    signIn(user): Observable<any> {
        return this.httpClient.get('http://localhost:3000/users?email=' 
        + user.email + '&password=' + user.password);
    }
}
