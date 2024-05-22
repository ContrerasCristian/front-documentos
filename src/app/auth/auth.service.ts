import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private apiUrl = ''

    constructor(private http: HttpClient){}

    login(email: string, password: string): Observable<any> {
        return this.http.post(`${this.apiUrl}/login`, {email, password});
    }
    logout(): Observable<any> {
        return this.http.post(`${this.apiUrl}/logout`, {})
    }
}