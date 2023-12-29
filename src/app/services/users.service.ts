import { Injectable } from '@angular/core';
import { CrudService, User } from '../interfaces';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService implements CrudService<User> {
  url = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) {}

  create(item: User): Observable<User> {
    throw new Error('Method not implemented.');
  }

  getAll(): Observable<User[]> {
    return this.http
      .get(`${this.url}users`)
      .pipe(map((response: any) => response as User[]));
  }

  getById(id: string): Observable<User> {
    throw new Error('Method not implemented.');
  }
  update(id: string, item: User): Observable<User> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Observable<void> {
    throw new Error('Method not implemented.');
  }
}
