import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginInterface } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  url = 'http://localhost:3000/';
  private localStorageKey = 'jwtToken';

  constructor(private http: HttpClient) {}

  login(data: LoginInterface) {
    return this.http.post(`${this.url}auth/login`, data);
  }

  setToken(token: string): void {
    localStorage.setItem(this.localStorageKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.localStorageKey);
  }

  authenticateToken(token: string) {
    return this.http.post(`${this.url}auth/authenticateToken`, { token });
  }

  createHeaders() {
    return {
      headers: new HttpHeaders({
        Authorization: localStorage.getItem('jwtToken')!,
      }),
    };
  }
}
