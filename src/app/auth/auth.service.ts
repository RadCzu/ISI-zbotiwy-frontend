import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8080/api/auth'; // Ensure this points to your backend

  private readonly _tokenKey: string = 'auth_token';
  private readonly _usernameKey: string = 'username';

  constructor(private router: Router, private http: HttpClient) { }

  register(username: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, { username, password });
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { username, password }).pipe(
      tap((response: any) => {
        const token = response.token;
        const username = response.username;
        if (token) {
          localStorage.setItem(this._tokenKey, token);
          localStorage.setItem(this._usernameKey, username);
        }
      })
    );
  }

  logout() {
    localStorage.removeItem(this._tokenKey);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }

  getToken(): string | null {
    return localStorage.getItem(this._tokenKey);
  }
}
